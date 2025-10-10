# How to Add Background Image, Person Photo, and Small Images

This guide shows you how to add the images from your design to the hero section.

## Option 1: Using Strapi (Recommended for Production)

### Step 1: Start Strapi
```bash
cd strapi
npm run develop
```

### Step 2: Access Strapi Admin
1. Go to `http://localhost:1337/admin`
2. Create an admin account if you haven't already

### Step 3: Upload Images
1. Go to **Media Library** in the sidebar
2. Click **Upload Files**
3. Upload your images:
   - Background image (the green mountain/landscape)
   - Person image (the person in Saudi dress)
   - Small team images (the 3 small circular photos)

### Step 4: Add Content to Hero Section
1. Go to **Content Manager** → **Single Types** → **Hero**
2. Switch to Arabic locale (top right dropdown)
3. Fill in the fields:
   - **Title**: `إتمام`
   - **Subtitle**: `خدماتك التجارية والإدارية`
   - **Description**: `من تأسيس الشركات إلى استخراج الرخص وإدارة أعمالك، نوفر لك حلول متكاملة لإنشاء شركة وسريعة في الرياض`
   - **Primary Button**: `{"label": "تصفح الخدمات", "href": "/services"}`
   - **Secondary Button**: `{"label": "من نحن", "href": "/about"}`
   - **Background Image**: Select your mountain/landscape image
   - **Person Image**: Select the person photo
   - **Small Images**: Select the 3 small team photos
4. Click **Save**
5. Switch to English locale and repeat with English content

### Step 5: Enable GraphQL Fetch in Frontend
1. Open `frontend/src/app/page.tsx`
2. Uncomment all the commented code (lines with `//`)
3. Save the file

### Step 6: Enable Public Access
1. In Strapi admin, go to **Settings** → **Users & Permissions** → **Roles** → **Public**
2. Find **Hero** and **Header** in the permissions list
3. Check the `find` permission for both
4. Click **Save**

### Step 7: View Your Site
1. Make sure Strapi is running: `cd strapi && npm run develop`
2. Start the frontend: `cd frontend && npm run dev`
3. Visit `http://localhost:3000`

## Option 2: Direct Image Placement (Quick Testing)

If you want to quickly add images without Strapi:

### Step 1: Add Images to Public Folder
1. Copy your images to `frontend/public/`:
   - `frontend/public/hero-bg.jpg` (background)
   - `frontend/public/person.png` (person image)
   - `frontend/public/team1.jpg` (small image 1)
   - `frontend/public/team2.jpg` (small image 2)
   - `frontend/public/team3.jpg` (small image 3)

### Step 2: Update HeroSection Component
Open `frontend/src/components/HeroSection.tsx` and modify the default values:

Find this section (around line 60):
```tsx
{backgroundImage ? (
  <Image
    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${backgroundImage.url}`}
    alt={backgroundImage.alternativeText || 'Background'}
    fill
    className="object-cover"
    priority
  />
) : (
  <div className="w-full h-full bg-gradient-to-br from-green-700 via-green-600 to-green-800" />
)}
```

Replace with:
```tsx
{backgroundImage ? (
  <Image
    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${backgroundImage.url}`}
    alt={backgroundImage.alternativeText || 'Background'}
    fill
    className="object-cover"
    priority
  />
) : (
  <Image
    src="/hero-bg.jpg"
    alt="Background"
    fill
    className="object-cover"
    priority
  />
)}
```

Find the person image section (around line 120):
```tsx
{personImage ? (
  <div className="relative w-[85%] h-[85%]">
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${personImage.url}`}
      alt={personImage.alternativeText || 'Person'}
      fill
      className="object-contain object-bottom"
      priority
    />
  </div>
) : (
  <div className="w-[70%] h-[70%] bg-white/20 rounded-full" />
)}
```

Replace with:
```tsx
{personImage ? (
  <div className="relative w-[85%] h-[85%]">
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${personImage.url}`}
      alt={personImage.alternativeText || 'Person'}
      fill
      className="object-contain object-bottom"
      priority
    />
  </div>
) : (
  <div className="relative w-[85%] h-[85%]">
    <Image
      src="/person.png"
      alt="Person"
      fill
      className="object-contain object-bottom"
      priority
    />
  </div>
)}
```

Find the small images section (around line 145):
```tsx
{smallImages && smallImages.length > 0 ? (
  smallImages.slice(0, 3).map((img, idx) => (
    <div key={idx} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.url}`}
        alt={img.alternativeText || `Team ${idx + 1}`}
        width={48}
        height={48}
        className="object-cover"
      />
    </div>
  ))
) : (
  <>
    <div className="w-12 h-12 rounded-full bg-green-200" />
    <div className="w-12 h-12 rounded-full bg-green-300" />
    <div className="w-12 h-12 rounded-full bg-green-400" />
  </>
)}
```

Replace with:
```tsx
{smallImages && smallImages.length > 0 ? (
  smallImages.slice(0, 3).map((img, idx) => (
    <div key={idx} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.url}`}
        alt={img.alternativeText || `Team ${idx + 1}`}
        width={48}
        height={48}
        className="object-cover"
      />
    </div>
  ))
) : (
  <>
    {['/team1.jpg', '/team2.jpg', '/team3.jpg'].map((src, idx) => (
      <div key={idx} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
        <Image
          src={src}
          alt={`Team ${idx + 1}`}
          width={48}
          height={48}
          className="object-cover"
        />
      </div>
    ))}
  </>
)}
```

## Image Specifications

For best results, use these image sizes:

- **Background Image**: 1920x1080px or larger (landscape orientation)
- **Person Image**: 600x800px with transparent background (PNG format recommended)
- **Small Team Images**: 200x200px (square, will be displayed as circles)

## Image Formats

- Background: JPG or WebP (smaller file size)
- Person: PNG (supports transparency)
- Team photos: JPG or PNG

## Tips

- Use high-quality images but optimize them for web (compress before uploading)
- The person image should have a transparent background for best effect
- Make sure the background image has good contrast with white text
- Test both Arabic and English versions to ensure text is readable

## Troubleshooting

**Images not showing?**
1. Check the console for errors (F12 in browser)
2. Verify image paths are correct
3. Make sure Next.js dev server is running
4. Clear browser cache and refresh

**Images from Strapi not loading?**
1. Check that Strapi is running
2. Verify CORS is configured correctly
3. Ensure public permissions are enabled
4. Check that `NEXT_PUBLIC_STRAPI_API_URL` is set in `.env.local`

