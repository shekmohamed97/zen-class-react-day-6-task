import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskNav from './components/TaskNav';
import Home from './components/Home';
import Stack from './components/Stack';
import DataSince from './components/DataSince';
import CyberScurity from './components/CyberScurity';
import Carear from './components/Carear';
import './styles/taskDisplay.css';

const App = () => {
  let taskData=[
  
// {
// image:"https://www.datapro.in/uploads/2d1ba0d260c4fc8de8917729d00cc574.jpeg",
// head:"Data Science",
// content:"Data science is a broad career path that is undergoing developments and thus promises abundant opportunities in the future.",
// date:"13",
// month:"May"

// },
{
image:"https://www.discoverdatascience.org/wp-content/uploads/2023/01/data-science-education.jpg",
head:"Data Science",
content:"Data Sciences uses AI (and its Machine Learning subset) to interpret historical data, recognize patterns, and make predictions.",
date:"24",
month:"July"

},
{
image:"https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?w=996&t=st=1703416197~exp=1703416797~hmac=4a4c534fb7f62453e30076ff22355a091f4dfe3ac5964032814536dbb3d7b9eb",
head:"Data Science",
content:"The current technological era is full of competition and those who have profound skillset are",
date:"25",
month:"September"

},
{
image:"https://www.cummins.com/sites/default/files/styles/newsroom_hero_image/public/images/newsroom_article/cybersecurity.jpg?itok=lb55sMTR",
head:"Cyber Security",
content:"TLet's delve into the salary ranges for cyber security professionals in Nigeria. According to PayScale, the average annual salary for a Cyber Security Analyst in Nigeria ranges from ₦2,400,000 to ₦6,500,000.",
date:"14",
month:"March"

},

{
image:"https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595831.jpg?w=996&t=st=1703417670~exp=1703418270~hmac=acdae9674a6ebe2745166a7646b21153850f86d23f56322c773a2a78b224efae",
head:"Cyber Security",
content:"Cybersecurity professionals are responsible for protecting their company's information and data from attacks by hackers, viruses, or other cyber threats.",
date:"15",
month:"April"

},
{
image:"https://community.nasscom.in/sites/default/files/media/images/cybersecurity%20security%20infosec%20art%20getty.jpg",
head:"Cyber Security",
content:"Cybersecurity professionals are responsible for protecting their company's information and data from attacks by hackers, viruses, or other cyber threats.",
date:"15",
month:"April"

},
{
image:"https://d2ms8rpfqc4h24.cloudfront.net/When_to_hire_full_stack_developer_1661527c98.jpg",
head:"Career Development",
content:"Scalable Vector Graphics (SVG) has revolutionized the world of graphics and web design. This vectorAs it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
date:"16",
month:"Feberary"
},
{
image:"https://asc.army.mil/web/wp-content/uploads/2023/03/DACM_Career-Development-Model_700x395pixels-scaled.jpg",
head:"Career Development",
content:"The four stages consist of establishment, advancement, maintenance and withdrawal. Each of the stages represents the age of a worker and the responsibilities and challenges that need to be addressed. Some workers repeat this model if they have a second career or midlife career change",
date:"28",
month:"October"

},
{
image:"https://empxtrack.com/wp-content/uploads/2009/03/career-development.jpg",
head:"Career Development",
content:"This being true, career management is an important life skill to develop and cultivate. According to Get Smart! About Modern Career Development, there are six stages of modern career development: Assessment, Investigation, Preparation, Commitment, Retention, and Transition.",
date:"10",
month:"March"

},
{
image:"https://www.risely.me/wp-content/uploads/2023/08/Risely-Featured-Image-Deeksha-11.svg",
head:"Career Development",
content:"The Big Five Model, also referred to as the Five-Factor Model, is a famous personality theory that describes personality as the play between five personality traits or factors. These factors or characteristics include openness to experience, conscientiousness, agreeableness, extraversion and neuroticism.",
date:"16",
month:"March"

},
{
  image:"https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
  head:"Data Science",
  content:"Data Science is more valuable than computer science. A Computer Scientist earns an annual salary of USD 100000 on average. A data scientist, on the other hand, earns more than USD 140000 per year. If you are a software developer or an experienced systems engineer, owning skillsets can instantly boost your salary.",
  date:"01",
  month:"April"
  
  },
  {
  image:"https://www.datapro.in/uploads/2d1ba0d260c4fc8de8917729d00cc574.jpeg",
  head:"Data Science",
  content:"The highest salary of data scientists can go beyond USD 200,000 if you have the required skills. On average, a data scientist can make $126,694 per year. Generally, the range is $99,000 to $164,000.",
  date:"09",
  month:"May"
  
  },
  
    {
      image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
  head:"Full Stack Development",
  content:"A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
  date:"28",
  month:"January"
  },
  {
  image:"https://d2ms8rpfqc4h24.cloudfront.net/When_to_hire_full_stack_developer_1661527c98.jpg",
  head:"Full Stack Development",
  content:"Full stack developers rate their happiness above average. At CareerExplorer, we conduct an ongoing survey with millions of people and ask them how satisfied they are with their careers. As it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
  date:"18",
  month:"October"
  
  },
  {
  image:"https://miro.medium.com/v2/resize:fit:800/1*iLa3E1yYHoYhOloCqQv36Q.png",
  head:"Full Stack Development",
  content:"The most popular full stack frameworks include Laravel, Ruby on Rails, and Express. js. If you're just starting, you might want to choose a framework that is relatively easy to learn, such as Laravel or Ruby on Rails. Alternatively, if you're looking for something more versatile or powerful, you might consider Express.",
  date:"13",
  month:"Feberary"
  
  },
  
    {
      image:"https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
      head:"Cyber Security",
      content:"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing.",
      date:"17",
      month:"March"
      
      },  

]



  return (
    <div>
      
      <BrowserRouter>
      <div>
          <TaskNav/>
        </div>
      <Routes>    
        <Route path='/'  element={<Home taskData={taskData}/>}/>
        <Route path='/fullstack'  element={<Stack taskData={taskData}/>} />
        <Route path='/datasince'  element={<DataSince taskData={taskData}/>}/>
        <Route path='/cyberscurity'  element={<CyberScurity taskData={taskData}/>}/>
        <Route path='/carear' element={<Carear taskData={taskData}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;