use joole;
alter table Product modify pid  int NOT NULL AUTO_INCREMENT;
alter table Product modify detail  varchar(4000);
Insert into `Product` (
`model`,`manufacturer`,`series`,`use_type`,`application`,`mounting_location`,`accessories`,
`model_year`,`airflow`,`power_min`,`power_max`,`operating_voltage_min`,`operating_voltage_max`,
`fan_speed_min`,`fan_speed_max`,`number_of_fan_speed`,`sound_at_max_speed`,`fan_sweep_diameter`,
`height_min`,`height_max`,`weight`,`firm`,`glob`,
detail,manu_department,manu_phone,manu_web,manu_email,sale_name,sale_phone,sale_web,sale_email
) 
values("model1-1-1-1","Manufacturer1","Series1-1-1","commercial","indoor","roof","with light",
2016,4467,1.95,21.14,100,240,
35,200,7,35,60,
12.3,57,13,0,1487,
"Airfoils – Moso bamboo – 60” diameter;Airfoil Finishes – Caramel Bamboo or Cocoa Bamboo;Hardware Finishes – Satin Nickel, Oil-Rubbed Bronze, Black or White;Motor – EC motor with digital inverter drive;Exceeds ENERGY STAR fan efficiency requirements by up to 1200%;Controls – Remote control Remote control (included), Haiku Home mobile app, Haiku Wall Control (optional), or Amazon Alexa-enabled devices (optional);Onboard Sensors – Ambient and surface temperature, relative humidity, and passive infrared sensors enable SenseME technology. Technology lets you automate your fan’s operation to maximize convenience and energy savings;Environment – Indoor use only.;Accessories – Haiku Light Kit and Haiku Wall Control. See respective spec sheets for details. A Tall Ceiling Kit and Stabilizer Kit are available for ceilings 14 feet (4.3 meters) or taller;Patented LED light module (optional) seamlessly integrates with the body of the fan;Made in the U.S.A.",
"Technical Support","+1 650 889 6222","http://www.test.com","marty@mcfly.com","Marty McFly","+1 800 466 8200","http://www.bigassfans.com","techsupport@bigass.com"),
("Model4444","Manufacturer4444","Series404-4","commercial","indoor","roof","without light",
2015,6254,1295,45,80,200,
25,180,6,47,50,
20.3,67,10,8,1233,
" Best Choice Products 16in Adjustable Cooling Oscillating Standing Pedestal Fan w/ 7.5 Hour Timer, Double Blades, Remote Control, 3 Fan Modes, Front/Back Tilt – Black;Lasko Cool Colors 20\" Box 3-Speed Fan, Model #B20301, Black; Dual-blade design: built with a patented dual-blade design (large and small fan blades) for a more powerful and satisfying breeze, as well as a digital display for easy readin;Optimal functionality: 16' pedestal fan features seemingly endless options including 3 speeds, 10\" height adjustment, a front/back tilt mechanism; oscillating function and an electric timer that can be set up to 7.5 hour;3 fan modes; add even more functionality, as Steady mode gives consistent airflow, Wind mode mimics a soft wind that grows into a gust and Sleep mode gives the impression of a light breeze;Remote control included: designed with a large, round base for stability and includes a remote control that lets you adjust the fan while seated on your couch or stretched out on the bed;Safe and attractive: ETL listed fan has a sleek design that fits beautifully in any room",
"Support","+1 345 678 6222","http://www.hello.com","wow@mcfly.com","Sam ","+1 633 466 8200","http://www.world.com","yinyin@bigass.com"
),
("model2-2-2","Manufacturer2","Series2-2-2","commercial","outdoor","floor","music",
2018,7900,2.5,19,80,209,
38,210,7,67,40,
15.3,50,12,12,1500,
"360-degree tilt;Adjustable height;Strong wind;Heavy-duty drum fan with 3 speeds;Cord storage;High-velocity fan requires assembly;Heavy-duty pedestal base;Screw knob for easy height adjustment;Item dimensions: 19\"L x 25\"W x 53\"H;Item weight: 33.65 lbs",
" guess","+1 123 999 0000","http://www.hello.com","wow@mcfly.com","supreme ","+1 111 222 333","http://www.world.com","hello@bigass.com"
),
("model3333","Manufacturer3","Series3-3-3","gift","indoor","roof","without light",
2019,3000,2.2,19.5,94,190,
31,190,8,44,88,
12.3,99,9,4,1293,
"such as living rooms, bedrooms, dining rooms or family rooms;QUIET, REVERSIBLE MOTOR: Conveniently quiet, 3 speed - reversible motor. Can be run in the winter to aid in rotating warm air and cutting down on energy costs;TWO-SIDED CEILING FAN BLADES: Get the perfect finish match with our reversible ceiling;blades. Each side has a unique finish;FLUSH MOUNT: Two piece CRS hugger mounting system included;PULL-CHAINS INCLUDED: Included for quick and easy on/off adjustments. This fan is also compatible with universal ceiling fan remote controls.",
" whatever","+1 555 666 7777","http://www.ppppp.com","itlize@Skye.com","blablabla ","+1 111 555 333","http://www.world.com","hello@goole.com"
),
("model555","Manufacturer5","Series5-5-5-5-5-","gift","oudoor","floor","music",
2000,5800,1.3,16.2,80,140,
23,170,6,30,55,
12.3,95,7,2,900,
"such as living rooms, bedrooms, dining rooms or family rooms;QUIET, REVERSIBLE MOTOR: Conveniently quiet, 3 speed - reversible motor. Can be run in the winter to aid in rotating warm air and cutting down on energy costs;TWO-SIDED CEILING FAN BLADES: Get the perfect finish match with our reversible ceiling;blades. Each side has a unique finish;FLUSH MOUNT: Two piece CRS hugger mounting system included;PULL-CHAINS INCLUDED: Included for quick and easy on/off adjustments. This fan is also compatible with universal ceiling fan remote controls.",
" whatever","+1 555 666 7777","http://www.ppppp.com","itlize@Skye.com","blablabla ","+1 111 555 333","http://www.world.com","hello@goole.com"
);

select * from Product;
select * from Project;
select * from ProjectProduct;
select * from User;