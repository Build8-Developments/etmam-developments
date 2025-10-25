# أيقونة واتساب العائمة المحسنة - Enhanced WhatsApp Float Button

## نظرة عامة
تم إضافة أيقونة واتساب عائمة محسنة تظهر في جميع صفحات الموقع، مع دعم كامل للغة العربية (RTL) وتأثيرات بصرية متقدمة.

## الميزات الجديدة ✨
- ✅ **دعم RTL كامل** - تظهر في الجانب الأيمن للعربية
- ✅ **تأثيرات بصرية متقدمة** - تدرجات لونية، ظلال، نبضات
- ✅ **شارة إشعار محسنة** - تصميم جذاب مع تأثيرات
- ✅ **تأثيرات تفاعلية** - hover، click، focus
- ✅ **دعم الوضع الليلي** - ألوان متكيفة
- ✅ **تحسينات الوصولية** - aria-labels، titles
- ✅ **تأثيرات انتقالية سلسة** - cubic-bezier animations

## الملفات المضافة/المعدلة

### ملفات جديدة:
- `src/components/common/WhatsAppFloat.tsx` - مكون أيقونة واتساب
- `src/constants/whatsapp.ts` - إعدادات واتساب

### ملفات معدلة:
- `src/app/layout.tsx` - إضافة المكون للتخطيط الرئيسي
- `src/app/globals.css` - إضافة أنماط CSS
- `src/components/common/index.ts` - تصدير المكون الجديد
- `src/constants/index.ts` - تصدير إعدادات واتساب

## كيفية التخصيص

### تغيير رقم الهاتف
في ملف `src/constants/whatsapp.ts`:
```typescript
export const WHATSAPP_CONFIG = {
  phoneNumber: '+966500000000', // غير هذا الرقم
  // ...
}
```

### تغيير الرسائل
```typescript
messages: {
  ar: 'مرحباً، أريد الاستفسار عن خدماتكم',
  en: 'Hello, I would like to inquire about your services'
}
```

### تخصيص الإعدادات
```typescript
display: {
  delay: 2000, // تأخير الإظهار بالميلي ثانية
  position: 'bottom-left', // موضع الأيقونة
  showBadge: true, // إظهار شارة الإشعار
  badgeCount: 1, // عدد الإشعارات
},
styling: {
  size: 'large', // 'small', 'medium', 'large'
  color: '#25D366', // لون واتساب الرسمي
  pulse: true, // تأثير النبض
  tooltip: true, // إظهار التلميح
}
```

## الاستخدام المتقدم

### استخدام المكون في صفحة معينة
```tsx
import { WhatsAppFloat } from '@/components/common';

export default function MyPage() {
  return (
    <div>
      {/* محتوى الصفحة */}
      <WhatsAppFloat 
        phoneNumber="+966123456789"
        message="رسالة مخصصة لهذه الصفحة"
      />
    </div>
  );
}
```

### إخفاء الأيقونة في صفحة معينة
```tsx
// في layout.tsx، يمكن إضافة شرط لإخفاء الأيقونة في صفحات معينة
{!pathname.includes('/admin') && (
  <WhatsAppFloat phoneNumber={WHATSAPP_CONFIG.phoneNumber} />
)}
```

## الأنماط CSS المحسنة

تم إضافة الأنماط التالية إلى `globals.css`:

### الأنماط الأساسية:
- `.whatsapp-float` - الحاوي الرئيسي مع دعم RTL
- `.whatsapp-button` - زر واتساب مع تدرجات لونية وظلال
- `.whatsapp-pulse` - تأثير النبض المحسن
- `.whatsapp-tooltip` - التلميح مع دعم RTL والوضع الليلي

### الأنماط الجديدة:
- `.whatsapp-badge` - شارة الإشعار المحسنة
- `.whatsapp-icon` - أيقونة واتساب مع تأثيرات
- `@keyframes whatsappBadgePulse` - تأثير نبض الشارة
- `@keyframes whatsappPulse` - تأثير نبض محسن

### دعم RTL:
```css
[dir="rtl"] .whatsapp-float {
  left: auto;
  right: 24px;
}

[dir="rtl"] .whatsapp-tooltip {
  left: auto;
  right: 50%;
  transform: translateX(50%);
}
```

## التوافق
- ✅ متوافق مع جميع المتصفحات الحديثة
- ✅ يعمل على الأجهزة المحمولة والكمبيوتر
- ✅ يدعم الوضع الليلي والنهاري
- ✅ متوافق مع نظام RTL للعربية

## ملاحظات مهمة
1. تأكد من أن رقم الهاتف صحيح ومتاح على واتساب
2. يمكن إزالة شارة الإشعار بتعيين `showBadge: false`
3. يمكن تغيير موضع الأيقونة بتعديل CSS
4. الأيقونة تظهر بعد ثانيتين من تحميل الصفحة لتجنب الإزعاج

## الدعم
لأي استفسارات أو مشاكل، يرجى التواصل مع فريق التطوير.
