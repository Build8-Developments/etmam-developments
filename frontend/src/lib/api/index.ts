import { Language } from '@/types';

/**
 * API configuration
 */
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337',
  graphqlURL: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL || 'http://localhost:1337/graphql',
  uploadURL: process.env.NEXT_PUBLIC_STRAPI_UPLOAD_URL || 'http://localhost:1337/uploads',
} as const;

/**
 * Default API headers
 */
export const getDefaultHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
});

/**
 * Builds image URL from Strapi
 */
export const buildImageUrl = (url: string | undefined | null): string => {
  if (!url) return '';
  
  // If it's already a full URL, return as is
  if (url.startsWith('http')) {
    return url;
  }
  
  // Build full URL with API base URL
  return `${API_CONFIG.baseURL}${url}`;
};

/**
 * Builds upload URL from Strapi
 */
export const buildUploadUrl = (url: string | undefined | null): string => {
  if (!url) return '';
  
  // If it's already a full URL, return as is
  if (url.startsWith('http')) {
    return url;
  }
  
  // Build full URL with upload base URL
  return `${API_CONFIG.uploadURL}${url}`;
};

/**
 * Fetches data from Strapi API
 */
export const fetchFromStrapi = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const url = `${API_CONFIG.baseURL}/api${endpoint}`;
  
  const response = await fetch(url, {
    headers: getDefaultHeaders(),
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
};

/**
 * Fetches GraphQL data from Strapi
 */
export const fetchGraphQL = async <T>(
  query: string,
  variables: Record<string, unknown> = {},
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(API_CONFIG.graphqlURL, {
    method: 'POST',
    headers: {
      ...getDefaultHeaders(),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`GraphQL Error: ${response.status} ${response.statusText}`);
  }
  
  const result = await response.json();
  
  if (result.errors) {
    throw new Error(`GraphQL Errors: ${result.errors.map((e: { message: string }) => e.message).join(', ')}`);
  }
  
  return result.data;
};

/**
 * Uploads file to Strapi
 */
export const uploadToStrapi = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<{ id: number; url: string }> => {
  const formData = new FormData();
  formData.append('files', file);
  
  const xhr = new XMLHttpRequest();
  
  return new Promise((resolve, reject) => {
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable && onProgress) {
        const progress = (event.loaded / event.total) * 100;
        onProgress(progress);
      }
    });
    
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve({
          id: response[0].id,
          url: response[0].url,
        });
      } else {
        reject(new Error(`Upload failed: ${xhr.status}`));
      }
    });
    
    xhr.addEventListener('error', () => {
      reject(new Error('Upload failed'));
    });
    
    xhr.open('POST', `${API_CONFIG.baseURL}/api/upload`);
    xhr.send(formData);
  });
};

/**
 * Gets locale parameter for API calls
 */
export const getLocaleParam = (language: Language): string => {
  return language === 'ar' ? 'ar' : 'en';
};

/**
 * Handles API errors gracefully
 */
export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unexpected error occurred';
};
