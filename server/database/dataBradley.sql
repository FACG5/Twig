
insert into speclalizations (name,avatar_url) 
 values
 ('Physical Therapy','https://user-images.githubusercontent.com/36124895/49110940-78795080-f297-11e8-9719-1f8f612ec3a2.png'),
 ('Dental','https://user-images.githubusercontent.com/36124895/49111326-7499fe00-f298-11e8-9e06-204bbbbb8ab7.png'),
 ('Psychological','https://user-images.githubusercontent.com/36124895/49111389-aad77d80-f298-11e8-9a84-cec9b30fda54.png'),
 ('Safeguarding','https://user-images.githubusercontent.com/36124895/49111531-0b66ba80-f299-11e8-9dbd-5416b167ede5.png'),
 ('Midwifery','https://user-images.githubusercontent.com/36124895/49111602-48cb4800-f299-11e8-930b-5c53b9a173b0.png'),
 ('Radiology Tech','https://user-images.githubusercontent.com/36124895/49111682-7d3f0400-f299-11e8-8a59-1c24a7e9564a.png');


insert into skills (description) 
values 
('I’m a native speaker / mothertongue.'),
('I have tested at upper intermediate or advanced level.'),
('I have completed University or professional training this language.'),
('I’m self-taught.');

insert into jobs (title)
values
('Doctor (or medical student)'),
('Nurse (or nursing student)'),
('Psychologist'),
('Medical Administrator'),
('Dentist (or dental student)'),
('midwife, or specialist in Family Medicine'),
('Academic: Porfessor, Lecturer, etc.'),
('I am a cultural mediator or proffessional traslator'),
('Medical paraprofessional (or studentexamples include paramedics, physical therapists, nursing, assistants, radiology technicians, etc.)');


insert into languages (name) 
 values
 ('Arabic'),
 ('Chinese'),
 ('Mandarin Chinese'),
 ('Thai'),
 ('English'),
 ('Hindi'),
 ('Punjabi'),
 ('Korean'),
 ('Spanish'),
 ('Portuguese'),
 ('Gujarati'),
 ('Hungarian'),
 ('French'),
 ('Lingala'),
 ('Shilluba'),
 ('Kabanga Swahili'),
 ('Teluqu'),
 ('Russian'),
 ('Ukrainian'),
 ('Greek'),
 ('Albanian'),
 ('Yoruba'),
 ('Piqin'),
 ('Malayalam'),
 ('Luganda');
 

insert into dialects (name,language_id) 
 values
 ('Formal',1),
 ('Palestinian',1),
 ('Egyptian',1),
 ('Algerian',1),
 ('Gulf Spoken',1),
 ('Moroccan',1),
 ('Libyan',1),
 ('Tunisian',1),
 ('Omani',1),
 ('Sudanese',1),
 ('Iraqi',1),
 ('Hijazi',1),
 ('Hadrami',1),
 ('Jordanian',1),
 ('Lebaneses',1),
 ('Syrian',1),
 ('Formal',2),
 ('Traditional',2),
 ('Simplified',2),
 ('Formal',3),
 ('Formal',4),
 ('Formal',5),
 ('American sign language',5),
 ('Formal',6),
 ('High Hindi',6),
 ('Nagari Hindi',6),
 ('Literary Hindi',6),
 ('standard Hindi',6),
 ('Urdu',6),
 ('Dakhini',6),
 ('Rekhta',6),
 ('Hindustani',6),
 ('Formal',7),
 ('Formal',8),
 ('Formal',9),
 ('Andalusian',9),
 ('Aragonese',9),
 ('Murcian',9),
 ('Navarrese',9),
 ('Castilian',9),
 ('Silbo Gomero',9),
 ('Andorra',9),
 ('Argentina',9),
 ('Belize',9),
 ('Bolivia',9),
 ('Chile',9),
 ('Colombia',9),
 ('Costa Rica',9),
 ('Cuba',9),
 ('Dominican Republic',9),
 ('Mexico',9),
 ('Paraguay',9),
 ('Peru',9),
 ('Puerto Rico',9),
 ('Uruguay',9),
 ('Venezuela',9),
 ('Formal',10),
 ('Brazilian Portuguese',10),
 ('Beiran',10),
 ('Alentejan',10),
 ('Algarvian',10),
 ('Minhotan',10),
 ('Formal',11),
 ('Formal',12),
 ('Hungarian Sign Language',12),
 ('Formal',13),
 ('Algeria',13),
 ('Andorra',13),
 ('Belgium',13),
 ('Benin',13),
 ('Burkina Faso',13),
 ('Burundi',13),
 ('Cambodia',13),
 ('Cameroon',13),
 ('Canada',13),
 ('Central African Republic',13),
 ('Chad',13),
 ('Comoros',13),
 ('Congo',13),
 ('Côte d’Ivoire',13),
 ('Congo',13),
 ('Djibouti',13),
 ('Equatorial Guinea',13),
 ('Gabon',13),
 ('Guinea',13),
 ('Haiti',13),
 ('Monaco',13),
 ('Niger',13),
 ('Rwanda',13),
 ('Senegal',13),
 ('Switzerland',13),
 ('Togo',13),
 ('Formal',14),
 ('Formal',15),
 ('Formal',16),
 ('Formal',17),
 ('Formal',18),
 ('Formal',19),
 ('Formal',20),
 ('Modern Greek',20),
 ('Formal',21),
 ('Formal',22),
 ('Formal',23),
 ('Formal',24),
 ('Formal',25);


 

insert into users(first_name,last_name,email,password,other_skills,job_description,bio,location,gender,age,date_of_registe,avatar_url,linked_in,facebook,language_id,dialect_id,job_id) values ('first','user','a@a.com','$2y$12$xzsPmkM63LGMvguFh6JyG.CFTROHk9RAKz2wFdKB.EO8DvZok1oGK','other_Skills','job_description','bio','Gaza','Male',33,'2018-11-8','https://files.gitter.im/lubnaabd/vKAC/img_avatar.png',null,null,1,1,3),
('second','user','b@b.com','$2y$12$xzsPmkM63LGMvguFh6JyG.CFTROHk9RAKz2wFdKB.EO8DvZok1oGK','other_Skills','job_description','bio','Gaza','Male',28,'2018-11-8','https://files.gitter.im/lubnaabd/vKAC/img_avatar.png',null,null,1,1,2)
;


  insert into questions(question,date,owner,speclalization_id)
  values
  ('Have you ever been in a hospital  ?','2018-10-8','1','1'),
  ('Where is the pain exactly  ?','2018-3-8','1','5');

  insert into "typesOfTranslations"  (type) values ('text'),('video'),('audio');

  insert into translations(translation,date,type_id,language_id,dialect_id,owner,question_id)
  values
  ('هل أصبت من قبل بنوبة قلبية','2018-10-8',1,1,1,1,1),
  ('هل حدث وقد أصبت بأوجاع الصدر من قبل','2018-10-8',1,1,1,1,2);


