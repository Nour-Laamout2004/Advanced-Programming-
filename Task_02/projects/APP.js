import React from 'react';

// 1. مكون العنوان (Header): يستقبل اسم الكورس ويعرضه في h1
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

// 2. مكون الجزء (Part): يعرض اسم الجزء وعدد التمارين
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

// 3. مكون المحتوى (Content): يجمع أجزاء المادة ويقوم بتمرير البيانات لكل Part
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  );
};

// 4. مكون المجموع (Total): يقوم بجمع عدد التمارين وعرضها
const Total = (props) => {
  return (
    <p>مجموع التمارين: {props.exercises1 + props.exercises2 + props.exercises3}</p>
  );
};

// --- تمرين الوظيفة الإضافي ---
// 5. مكون بطاقة الطالب (StudentCard)
const StudentCard = (props) => {
  const cardStyle = {
    border: '1px solid #000',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={cardStyle}>
      <h4>اسم الطالب: {props.name}</h4>
      <p>التخصص: {props.major}</p>
      <p>الرقم الجامعي: {props.id}</p>
    </div>
  );
};

// المكون الرئيسي الذي يجمع كل شيء
const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />

      <hr />
      <h3>تمرين إضافي: بطاقات الطلاب</h3>
      {/* عرض 3 بطاقات مختلفة كما هو مطلوب */}
      <StudentCard name=" نور لعموط" major="هندسة برمجيات" id="2024001" />
      <StudentCard name=" لين لعموط" major="نظم معلومات" id="2024002" />
      <StudentCard name=" شام لعموط" major="علوم حاسب" id="2024003" />
    </div>
  );
};

export default App;