let tasks = [
  {
    id: 1,
    title: "Learn Express",
    completed: false,
  },
  {
    id: 2,
    title: "Learn GitHub",
    completed: true,
  },
];

// شمارنده‌ی مستقل برای ساخت id جدید، تا بعد از حذف تسک‌ها id تکراری ساخته نشود
tasks.nextId = 3;

module.exports = tasks;
