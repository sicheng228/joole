use joole;
alter table Product modify pid  int NOT NULL AUTO_INCREMENT;
Insert into `Product` (
`model`,`manufacturer`,`series`,`use_type`,`application`,`mounting_location`,`accessories`,
`model_year`,`airflow`,`power_min`,`power_max`,`operating_voltage_min`,`operating_voltage_max`,
`fan_speed_min`,`fan_speed_max`,`number_of_fan_speed`,`sound_at_max_speed`,`fan_sweep_diameter`,
`height_min`,`height_max`,`weight`,`firm`,`glob`
) 
values("H-asdlja-df","AS-212LL","Haiu H","commercial","indoor","roof","with light",
2016,5467,1.95,21.14,100,240,
35,200,7,35,60,
12.3,57,13,0,1487),
("H-afdsafe","A333GGLL","Posfd H","commercial","indoor","roof","without light",
2015,4254,1295,21.14,80,200,
25,180,6,25,70,
20.3,67,10,8,1233),
("P-sd-s24aiosd","Qfs-f35","Hello","guesee","out","floor","music",
2018,4900,2.5,19,80,209,
38,210,7,31,70,
10.3,50,12,12,1500),
("P-awdbk124697","wwwwwww","world","apple","banae","roof","wih light",
2019,6000,2.2,19.5,94,190,
31,190,8,25,59,
12.3,99,9,4,1293);