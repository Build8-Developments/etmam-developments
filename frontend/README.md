# Etmam Frontend

منصة خدمات تجارية وإدارية - الواجهة الأمامية

## المميزات

- ✅ Next.js 15 مع App Router
- ✅ TypeScript كامل
- ✅ دعم اللغة العربية والإنجليزية
- ✅ تصميم متجاوب (Responsive)
- ✅ تحسين الأداء
- ✅ كود منظم وقابل للصيانة

## البنية المنظمة

```
frontend/
├── public/images/          # صور منظمة في مجلدات فرعية
├── src/
│   ├── components/         # مكونات React
│   ├── types/             # TypeScript types
│   ├── constants/         # ترجمات وثوابت
│   ├── utils/             # دوال مساعدة
│   ├── hooks/             # Custom React hooks
│   └── contexts/          # React contexts
```

## التشغيل السريع

```bash
# تثبيت التبعيات
npm install

# تشغيل في وضع التطوير
npm run dev

# بناء المشروع
npm run build
```

## الملفات المهمة

- `DEVELOPER-GUIDE.md` - دليل شامل للمطورين
- `src/constants/index.ts` - جميع الترجمات والثوابت
- `src/types/index.ts` - TypeScript interfaces
- `src/hooks/index.ts` - Custom React hooks
- `src/utils/index.ts` - دوال مساعدة

## المكونات الرئيسية

- `Header` - شريط التنقل مع دعم اللغات
- `HeroSection` - القسم الرئيسي
- `CTASection` - قسم الدعوة للعمل
- `AboutSection` - قسم من نحن
- `ServicesSection` - قسم الخدمات
- `Footer` - التذييل

## دعم اللغات

- العربية (RTL)
- الإنجليزية (LTR)
- تبديل سلس بين اللغات
- حفظ اختيار اللغة في localStorage

## الأداء

- تحسين الصور مع Next.js Image
- Lazy loading للمكونات
- Debounce و Throttle للعمليات
- تحسين bundle size

---

للمزيد من التفاصيل، راجع [دليل المطور](DEVELOPER-GUIDE.md) 📚