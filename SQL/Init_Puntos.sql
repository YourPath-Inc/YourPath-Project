use yourpath;
INSERT INTO `yourpath`.`punto` (`user_id`, `titulo`, `init_date`, `end_date`, `descripcion`, `state`, `location`) VALUES 
	-- Puntos Roman
	('1', 'Ciclo Formativo de Grado Medio, SMX', '2018', '2020', '', 'DONE', 'Salesians Sarrià'),
	('1', 'Técnico de soporte de TI', '2019', '2020', 'Aptitudes: Sistema de seguimiento de incidentes · Mantenimiento informático · Inglés · Trabajo en equipo · Soporte técnico', 'DONE', 'Benjamin Franklin International School'),
    ('1', 'Help Desk Desktop Support', '2021', '2021', 'Aptitudes: Servicio de soporte técnico · Sistema de seguimiento de incidentes · Atención telefónica', 'DONE', 'Indra Barcelona, España'),
    ('1', 'Gestor ERP (SAP)', '2022', '2022', 'Aptitudes: Java · SQL · SAP ERP · Acceso a mercados · Mantenimiento informático · Servicio de atención al cliente · Gestión de contenido web', 'DONE', 'Neovideo Digital, S.L'),
    ('1', 'CFG Desarrollo de aplicaciones multiplataforma', '2020', '2022', '', 'DONE', 'Escoles Universitàries Gimbernat Formació'),
    ('1', 'Bootcamp Java (215h)', '2020', '2022', 'Programación y diseño de Software, desarrollo WEB (Html, Css, BootStrap, Javascript y jQuery), Bases de datos (SQL Server), Desarollo orientado a objetos con Java y Spring Boot', 'DOING', 'Fundació Esplai'),
    ('1', 'YourPath BackEnd Developer', 'Future', 'Future', 'PENDIENE', 'TODO', 'Fundacio Esplai'),
    
    -- Puntos Ismael
    ('2', 'CFGS Programación Multiplataforma Orientada al Ocio Digital y al Desarrollo de Videojuegos', 'sept 2020', 'jun 2021', '', 'DONE', 'ITB'),
    ('2', 'Monitor', 'jul 2022', 'ago 2022', '', 'DONE', 'Fundació Pere Tarrés'),
    ('2', 'Actor', 'ene 2020', 'actualidad', '', 'DOING', 'Terratreros Terrassa'),
    ('2', 'Coding Bootcamp en Java & SQL (215h)', 'oct. 2022 ', 'actualidad', 'Actividades y grupos: - Lógica y fundamentos de las RegExp. 
		- Utilización de sistemas de control de versiones (GIT y Markdown).
		- Desarrollo web con HTML, CSS, BootStrap, JavaScript y jQuery. 
		- Manejo de bases de datos SQL (MySQL).
		- Programación con Java SE y creación de API REST con Spring Boot.', 'DOING', 'Fundación Esplai'),
	('2', 'YourPath FullStack Developer', 'Future', 'Future', '', 'TODO', 'Fundación Esplai'),
    
    -- Puntos Roger
        ('3', 'Bachillerato Tecnológico con Selectividad Aprobada', 'sept 2015', 'jun 2017', '', 'DONE', 'Escola Tecnos/Institut Montserrat Roig'),
        ('3', 'Doble CFGS en Diseño y Desarrollo de Aplicaciones Web y Multiplataforma', 'sept 2017', 'jun 2019', '- Doble Ciclo Superior en 3 años.
        - Multiplataforma centrado en Java con AndroidStudio
        - APIs multiplataforma con BBDD en SQL
        - Formación en Microsoft Office (Word, PP, Excel, Acces y Office)', 'DONE', 'Inovación en Formación Profesional, Barcelona'),
        ('3', 'Coding Bootcamp en Java & SQL (215h)', 'oct. 2022 ', 'actualidad', 'Actividades y grupos: - Lógica y fundamentos de las RegExp. 
		- Utilización de sistemas de control de versiones (GIT y Markdown).
		- Desarrollo web con HTML, CSS, BootStrap, JavaScript y jQuery. 
		- Manejo de bases de datos SQL (MySQL).
		- Programación con Java SE y creación de API REST con Spring Boot.', 'DOING', 'Fundación Esplai'),
        ('3', 'YourPath Frontend Developer', 'Future', 'Future', '', 'TODO', 'Fundación Esplai'),
        
	-- Puntos Miguel
		('4', 'Grado en Biotecnología', 'sep. 2017', 'jul. 2021', 'Grado que me aportó los conocimientos necesarios para el diseño y análisis de bioprocesos destinados a la obtención de productos, bienes y servicios, así como la gestión y control de los mismos. Además me preparó para desarrollar proyectos de investigación e I+D destinados a distintos ámbitos de la biotecnología; desde la microbiología hasta la biotecnología vegetal.', 'DONE', 'UPV/EHU'),
        ('4', 'Asistente de investigación', 'feb. 2020', 'jul. 2021', 'Identificación de factores de transcripción relacionados con el cultivo en presencia de amonio.
- qPCR de DNA.
- Determinación de cantidad de clorofila. 
- Cultivo in vitro de Arabidopsis thaliana. 
- Electroforesis para determinación de genotipo.', 'DONE', 'UPV/EHU'),
        ('4', 'Official Master in Plant Biology, Genomics and Biotechnology', 'OCT.2021', 'SEP.2022', 'Con este master me he especializado en el sector de la biotecnología vegetal, más concretamente tratando la mejora de plantas de cultivo para una producción más sostenible y una alimentación más saludable, en la producción biotecnológica de fármacos y otros compuestos activos con aplicaciones tecnológicas, la identificación y la conservación de la diversidad genética vegetal.', 'DONE', 'Universidad Autonoma de Barcelona'),
        ('4', 'Asistente de investigación', 'feb. 2022', 'sep.2022', 'Mejora del 25% en la detección de familias de transposones en arroz con short-reads de Illumina y long-reads de PacBio.
Tratamiento de datos en R (Tidyverse) y Linux (Bash).
Uso de Bioconda packages
RT-PCR de cDNA', 'DONE', 'CRAG'),
        ('4', 'Coding Bootcamp en Java & SQL', 'oct. 2022', 'dic. 2022', '- Lógica y fundamentos de las RegExp. 
- Utilización de sistemas de control de versiones (GIT y Markdown).
- Desarrollo web con HTML, CSS, BootStrap, JavaScript y jQuery. 
- Manejo de bases de datos SQL (MySQL).
- Programación con Java SE y creación de API REST con Spring Boot.', 'DOING', 'Fundación Esplai'),
		('4', 'YourPath Frontend Developer', 'Future', 'Future', '', 'TODO', 'Fundación Esplai');