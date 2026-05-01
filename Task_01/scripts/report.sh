#إنشاء اسم ملف التقرير بناءً على تاريخ اليوم
REPORT_FILE="notes/$(date +%Y-%m-%d).txt"
#كتابةالمعلومات الأساسية
echo "User: $USER" > $REPORT_FILE
echo "Current Path: $(pwd)" >> $REPORT_FILE
#data عدد الملفات في مجلد
COUNT=$(Is data | wc -l)
echo "Total files in data folder:$COUNT" >> $REPORT_FILE
echo "Success: Report generated in $REPORT_FILE"
