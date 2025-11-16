/**
 * Centralized Z-Index Management
 * 
 * This file contains all z-index values used across the application.
 * Using constants ensures consistency and prevents stacking context conflicts.
 * 
 * Stack Order (lowest to highest):
 * - Background elements: 1-9
 * - Content elements: 10-19
 * - Carousel controls: 20-29
 * - Forms & interactive sections: 30-49
 * - Modals & dialogs: 50-89
 * - Mobile menu overlay: 90
 * - Mobile menu: 95
 * - Header/Navigation: 100
 * - WhatsApp float: 9500
 * - Toast notifications: 10000
 */

export const Z_INDEX = {
  // Background layers
  HERO_GRADIENT: 1,
  HERO_CONTENT: 2,
  DECORATIVE_OVERLAY: 5,
  
  // Content elements
  ICON_OVERLAY: 10,
  
  // Interactive elements
  CAROUSEL_CONTROLS: 20,
  SERVICE_BADGE: 20,
  
  // Modals and dialogs
  MODAL: 50,
  MODAL_BACKDROP: 49,
  
  // Forms and sections (below header to prevent overlay issues)
  FORM: 50,
  CONSULTATION_FORM: 50,
  
  // Navigation (mobile-specific)
  MOBILE_MENU_OVERLAY: 90,
  MOBILE_MENU: 95,
  
  // Header
  HEADER: 100,
  
  // Floating elements
  WHATSAPP_FLOAT: 9500,
  
  // Notifications (highest priority)
  TOAST: 10000,
} as const;

// Tailwind class helpers for common z-index values
export const Z_INDEX_CLASSES = {
  HERO_GRADIENT: 'z-[1]',
  HERO_CONTENT: 'z-[2]',
  DECORATIVE_OVERLAY: 'z-[5]',
  ICON_OVERLAY: 'z-10',
  CAROUSEL_CONTROLS: 'z-20',
  SERVICE_BADGE: 'z-20',
  FORM: 'z-[110]',
  CONSULTATION_FORM: 'z-[110]',
  MODAL: 'z-50',
  MODAL_BACKDROP: 'z-[49]',
  MOBILE_MENU_OVERLAY: 'z-[90]',
  MOBILE_MENU: 'z-[95]',
  HEADER: 'z-[100]',
  WHATSAPP_FLOAT: 'z-[9500]',
  TOAST: 'z-[10000]',
} as const;

export default Z_INDEX;
