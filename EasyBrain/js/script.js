// script.js - main behaviors, simple i18n (ru/en)
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.querySelectorAll('#year').forEach(el=> el.textContent = new Date().getFullYear());

  // nav toggle (mobile)
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', ()=> siteNav.classList.toggle('open'));
  }

  // language toggle (global)
  const LANG_KEY = 'easy_lang';
  const defaultLang = localStorage.getItem(LANG_KEY) || 'ru';
  function setLang(lang){
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = (lang === 'en' ? 'en' : 'ru');
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(i18n[lang] && i18n[lang][key]){
        if(el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea'){
          el.placeholder = i18n[lang][key];
        } else {
          el.innerHTML = i18n[lang][key];
        }
      }
    });
    // update simple lang buttons text
    document.querySelectorAll('.lang-btn').forEach(b=> b.textContent = (lang === 'ru' ? 'EN' : 'RU'));
  }

  document.querySelectorAll('.lang-btn').forEach(b=> b.addEventListener('click', ()=> {
    const cur = localStorage.getItem(LANG_KEY) || defaultLang;
    setLang(cur === 'ru' ? 'en' : 'ru');
  }));

  // initialize language map (keys used in HTML)
  window.i18n = {
    ru: {
      title_home: 'EasyBrain — Главная',
      nav_home:'Главная', nav_about:'О репетиторе', nav_courses:'Курсы', nav_reviews:'Отзывы', nav_library:'Библиотека', nav_chat:'Чат', nav_account:'Личный кабинет',
      hero_title:'Твоя задача — понять. Моя — объяснить.',
      hero_lead:'Персональные занятия по математике и физике, подготовка к ЕГЭ и олимпиадам.',
      cta_signup:'Записаться', cta_courses:'Посмотреть курсы',
      feat_experience:'Опытный преподаватель — 10+ лет', feat_practice:'Гибкий график и адекватные цены', feat_plan:'Индивидуальные планы и отчётность',
      why_choose:'Почему выбирают EasyBrain', f_personal:'Персональный план', f_personal_text:'Каждый ученик получает адаптированную программу.',
      f_practice:'Практика 80%', f_practice_text:'Большой объём практических задач и проверок.', f_reports:'Отчётность для родителей', f_reports_text:'Регулярные отчёты об успеваемости и рекомендации.',
      popular_courses:'Популярные курсы', course1_title:'Индивидуальная подготовка к ЕГЭ (Математика)', course1_meta:'Индивидуально · 40 ак.ч',
      course2_title:'Онлайн-группа: физика — базовый уровень', course2_meta:'Группа · 1 раз в неделю',
      course3_title:'Интенсив по алгебре — 2 недели', course3_meta:'Интенсив · 16 ак.ч',
      testimonials:'Отзывы учеников', test1:'«Начал понимать математику за 2 месяца. +25 баллов»', test2:'«Уроки интересные, всё объясняется просто»',
      signup_title:'Записаться на курс', signup_sub:'Оставьте заявку — мы свяжемся в течение 24 часов',
      service_label:'Услуга', select_service:'-- Выберите услугу --', opt_individual:'Индивидуальные занятия', opt_group:'Групповые занятия', opt_exam:'Подготовка к экзаменам', opt_consult:'Консультация',
      name_label:'Как к вам обращаться?', phone_label:'Ваш телефон?', note_label:'Комментарий (необязательно)', send:'Отправить заявку', reset:'Очистить', agreement:'Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.',
      footer_tagline:'Твоя задача — понять. Моя — объяснить.',
      title_about:'О репетиторе — EasyBrain', about_title:'О преподавателе', about_lead:'Я — репетитор по математике и физике. Индивидуальный подход и понятные объяснения.',
      about_experience:'Опыт и достижения', teacher_role:'Преподаватель',
      title_courses:'Курсы — EasyBrain', courses_title:'Курсы и абонементы', courses_lead:'Выберите формат: индивидуально или в группе.',
      title_reviews:'Отзывы — EasyBrain', reviews_title:'Отзывы учеников',
      title_chat:'Чат — EasyBrain', chat_title:'Чат с преподавателем', title_library:'Библиотека — EasyBrain', library_title:'Библиотека материалов',
      title_login:'Личный кабинет — EasyBrain', login_title:'Вход в личный кабинет', login:'Войти', register:'Регистрация'
    },
    en: {
      title_home: 'EasyBrain — Home',
      nav_home:'Home', nav_about:'About', nav_courses:'Courses', nav_reviews:'Reviews', nav_library:'Library', nav_chat:'Chat', nav_account:'Account',
      hero_title:'Your task is to understand. Mine is to explain.',
      hero_lead:'Personal lessons in math and physics, exam prep and olympiads.',
      cta_signup:'Sign up', cta_courses:'View courses',
      feat_experience:'Experienced teacher — 10+ years', feat_practice:'Flexible schedule and fair prices', feat_plan:'Personal plans & reporting',
      why_choose:'Why choose EasyBrain', f_personal:'Personal plan', f_personal_text:'Each student receives an adapted program.',
      f_practice:'80% practice', f_practice_text:'Lots of practical tasks and checks.', f_reports:'Parent reports', f_reports_text:'Regular performance reports and recommendations.',
      popular_courses:'Popular courses', course1_title:'One-to-one exam prep (Math)', course1_meta:'One-to-one · 40 hr',
      course2_title:'Online group: Physics — basic', course2_meta:'Group · once a week', course3_title:'Algebra intensive — 2 weeks', course3_meta:'Intensive · 16 hr',
      testimonials:'Student testimonials', test1:'"Started understanding math in 2 months. +25 points."', test2:'"Lessons are interesting and clear."',
      signup_title:'Sign up for a course', signup_sub:'Leave an application — we will contact you within 24 hours',
      service_label:'Service', select_service:'-- Select a service --', opt_individual:'Individual lessons', opt_group:'Group lessons', opt_exam:'Exam preparation', opt_consult:'Consultation',
      name_label:'Your name', phone_label:'Phone', note_label:'Comment (optional)', send:'Send application', reset:'Reset', agreement:'By clicking Send you agree to the processing of personal data.',
      footer_tagline:'Your task is to understand. Mine is to explain.',
      title_about:'About — EasyBrain', about_title:'About the teacher', about_lead:'I am a tutor in math and physics. Individual approach and clear explanations.',
      about_experience:'Experience & achievements', teacher_role:'Teacher',
      title_courses:'Courses — EasyBrain', courses_title:'Courses & plans', courses_lead:'Choose a format: individual or group.',
      title_reviews:'Reviews — EasyBrain', reviews_title:'Student reviews',
      title_chat:'Chat — EasyBrain', chat_title:'Chat with the teacher', title_library:'Library — EasyBrain', library_title:'Resource library',
      title_login:'Account — EasyBrain', login_title:'Account login', login:'Login', register:'Register'
    }
  };

  // initialize language
  const cur = localStorage.getItem('easy_lang') || 'ru';
  setTimeout(()=> setLang(cur), 50);

  // signup buttons fill hidden input and scroll to form
  document.querySelectorAll('.open-signup').forEach(btn=> btn.addEventListener('click', ()=>{
    const course = btn.dataset.course || '';
    const input = document.getElementById('courseInput');
    if(input) input.value = course;
    const target = document.getElementById('signup');
    if(target) target.scrollIntoView({behavior:'smooth', block:'center'});
  }));

  // simple slider
  const slides = document.querySelectorAll('.slider .slide');
  if(slides.length>1){
    let i=0;
    setInterval(()=>{ slides[i].classList.remove('active'); i=(i+1)%slides.length; slides[i].classList.add('active'); }, 4500);
  }

  // form submit fake
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const payload = {}; data.forEach((v,k)=> payload[k]=v);
      console.log('Заявка:', payload);
      showToast(i18n[localStorage.getItem('easy_lang')||'ru'].send + ' — OK');
      form.reset();
    });
  }

  // phone mask
  document.querySelectorAll('input[type=\"tel\"]').forEach(input=>{
    input.addEventListener('input', function(e){ let v=e.target.value.replace(/\\D/g,''); if(v.startsWith('8')) v='7'+v.slice(1); if(v.length>0) v='+'+v; if(v.length>2) v=v.slice(0,2)+' ('+v.slice(2); if(v.length>7) v=v.slice(0,7)+') '+v.slice(7); if(v.length>12) v=v.slice(0,12)+'-'+v.slice(12); if(v.length>15) v=v.slice(0,15); e.target.value=v; });
  });

  // toast
  function showToast(msg){
    const t=document.createElement('div'); t.className='toast'; t.textContent=msg;
    Object.assign(t.style,{position:'fixed',right:'20px',bottom:'20px',background:'#0f1724',color:'#fff',padding:'12px 16px',borderRadius:'10px',zIndex:9999});
    document.body.appendChild(t); setTimeout(()=> t.style.opacity=1,10); setTimeout(()=> { t.style.opacity=0; setTimeout(()=> t.remove(),400); },3000);
  }

});
