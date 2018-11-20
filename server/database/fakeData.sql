insert into speclalizations (name,avatar_url) 
 values
 ('Pain','https://files.gitter.im/lubnaabd/meLi/image.png'),
 ('Literacy','https://files.gitter.im/lubnaabd/meLi/image.png'),
 ('Symptoms','https://files.gitter.im/lubnaabd/meLi/image.png'),
 ('Psychology','https://files.gitter.im/lubnaabd/meLi/image.png'),
 ('Medical history','https://files.gitter.im/lubnaabd/meLi/image.png');

insert into languages (name) 
 values
 ('Arabic'),
 ('English');

insert into dialects (name,language_id) 
 values
 ('Palestinian',1),
 ('Egypt',1);

insert into users(first_name,password,last_name,email,job_title,job_description,bio,location,gender,date_of_registe,avatar_url,linked_in,facebook,language_id,dialect_id)
  values
  ('lubna','$2y$12$KgCahI42EN9MBPoQ3qVnK.mrWHrbuXuBXTyNuCwAN8SQ9oNUxsOk6','abd','lubna@hotmail.com','job_title','job_description','bio','Gaza','Femal','2018-11-8','https://files.gitter.im/lubnaabd/meLi/image.png',null,null,1,1);


  
  insert into questions(questions,date,owner,speclalization_id)
  values
  ('Have you ever had a heart attack before ?','2018-11-8','1','1'),
  ('Have you ever been in a hospital  ?','2018-10-8','1','1'),
  ('Where is the pain exactly  ?','2018-1-8','1','1'),
  ('Where is the pain exactly  ?','2018-3-8','1','1');

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
