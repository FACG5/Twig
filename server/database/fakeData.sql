
insert into speclalizations (name,avatar_url) 
 values
 ('Pain','https://files.gitter.im/lubnaabd/meLi/image.png'),
 ('Literacy','https://files.gitter.im/lubnaabd/meLi/image.png'),
 ('Symptoms','https://files.gitter.im/lubnaabd/meLi/image.png'),
 ('Psychology','https://files.gitter.im/lubnaabd/meLi/image.png'),
 ('Medical history','https://files.gitter.im/lubnaabd/meLi/image.png');


insert into skills (description) 
values 
('I’m a native speaker / mothertongue.'),
('I have tested at upper intermediate or advanced level.'),
('I have completed University or professional training this language.'),
('I’m self-taught.');

insert into jobs (title)
values
('Doctor (or medical student'),
('Nurse (or nursing student)'),
('Psychologist'),
('Medical paraprofessional (or studentexamples include paramedics, physical therapists, nursing, assistants, radiology technicians, etc.'),
('Medical Administrator'),
('Dentist (or dental student'),
('midwife, or specialist in Family Medicine'),
('Academic: Porfessor, Lecturer, etc.'),
('I am a cultural mediator or proffessional traslator');


insert into languages (name) 
 values
 ('Arabic'),
 ('English');

insert into dialects (name,language_id) 
 values
 ('Palestinian',1),
 ('Egypt',1);

insert into users(first_name,last_name,email,password,other_skills,job_description,bio,location,gender,date_of_registe,avatar_url,linked_in,facebook,language_id,dialect_id) values ('a','a','a@a.com','$2y$12$xzsPmkM63LGMvguFh6JyG.CFTROHk9RAKz2wFdKB.EO8DvZok1oGK','other_Skills','job_description','bio','Gaza','M','2018-11-8','https://files.gitter.im/lubnaabd/meLi/image.png',null,null,1,1);


  insert into questions(questions,date,owner,speclalization_id)
  values
  ('Have you ever had a heart attack before ?','2018-11-8','1','1'),
  ('Have you ever been in a hospital  ?','2018-10-8','1','1'),
  ('Where is the pain exactly  ?','2018-1-8','1','1'),
  ('Where is the pain exactly  ?','2018-3-8','1','1'),
  ('Where is the pain exactly  ?','2018-3-8','1','1'),
  ('Where is the pain exactly  ?','2018-3-8','1','2'),
  ('Where is the pain exactly  ?','2018-3-8','1','2'),
  ('Where is the pain exactly  ?','2018-3-8','1','2'),
  ('Where is the pain exactly  ?','2018-3-8','1','3'),
  ('Where is the pain exactly  ?','2018-3-8','1','3'),
  ('Where is the pain exactly  ?','2018-3-8','1','4'),
  ('Where is the pain exactly  ?','2018-3-8','1','4'),
  ('Where is the pain exactly  ?','2018-3-8','1','4'),
  ('Where is the pain exactly  ?','2018-3-8','1','5');

  insert into "typesOfTranslations"  (type) values ('text'),('video'),('audio');

  insert into translations(translation,vote_up,vote_down,date,type_id,language_id,dialect_id,owner,question_id)
  values
  ('هل أصبت من قبل بنوبة قلبية',10,5,'2018-10-8',1,1,1,1,1),
  ('هل أصبت من قبل بجلطة قلبية',8,5,'2018-10-8',1,1,1,1,1),
  ('هل أصبت من قبل بذبحة قلبية',7,4,'2018-10-8',1,1,1,1,1),
  ('هل حدث وقد أصبت بأوجاع الصدر من قبل',1,8,'2018-10-8',1,1,1,1,1),
  ('هل أصبت من قبل بنوبة قلبية',10,5,'2018-10-8',1,1,1,1,2),
  ('هل أصبت من قبل بجلطة قلبية',8,5,'2018-10-8',1,1,1,1,2),
  ('هل أصبت من قبل بذبحة قلبية',7,4,'2018-10-8',1,1,1,1,2),
  ('هل حدث وقد أصبت بأوجاع الصدر من قبل',1,8,'2018-10-8',1,1,1,1,2);