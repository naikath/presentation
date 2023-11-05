type Data = {
	id: number;
	definition: string;
	description: string;
};

type DataLangs = {
	en: Data[];
	es: Data[];
};

export const data: DataLangs = {
	en: [
		{
			id: 101,
			definition: `Markup language for the structure of the web`,
			description: `
I've knowledge of the variety of HTML tags and I'm able to structure webs using semantic tags
`,
		},
		{
			id: 102,
			definition: `Styling language for the web`,
			description: `
I have experience using multiple of the available properties
Creating layouts using both flexbox and grid
But still I have some difficulty for the initial design of a webpage

I frequently experiment with gradients, transitions, transforms, and less often things like \`:has\`, \`:is\`, and \`:where\` selectors, and scroll snapping when useful
When encounter a problem I use different strategies and some visual tricks until achieving the look i want

I always try to make my pages responsive
Or at least viewable in all devices until I can polish the details
`,
		},

		{
			id: 103,
			definition: `Native programming language for the web`,
			description: `
I can easily find my way in the language and through pretty much any problem I encounter
Experience dealing with its quirks, like implicit castings, and use of different data types like Set and Map
I can use it to manipulate the DOM, get resources from a server, execute tasks at a set time, create events and more
`,
		},
		{
			id: 104,
			definition: `Library for designing user interfaces`,
			description: `
This is the first UI framework I'm learning
I don't know everything yet but I like the use of components and how it manages state
I'm little by little improving in the use of hooks and learning more about how to structure my projects		
`,
		},
		{
			id: 105,
			definition: `Framework for styling with utility classes`,
			description: `
I've recently been learning this technology and it's easier than it seems
I don't have much experience but I've been using it more and improving easily because of my knowledge of vanilla CSS
`,
		},
		{
			id: 106,
			definition: `Library for designing using pre-made components`,
			description: `
Okay in this one I have really low experience
I used very few times, but I was still capable of getting the website to look nice
I wouldn't choose, since I like to customize almost everything, but I still understand it's column system, and it's components really help simplify stuff in multiple cases
So I would still be able to use it if I need to
`,
		},
		{
			id: 107,
			definition: `Framework to build web pages UI agnostic`,
			description: `
This is currently my default choice when deciding to build a page
It's pretty simple, which works since I don't always need a lot of interactivity
And also it's very similar to HTML, which makes it very intuitive
Also, being UI agnostic, I can start with this and then incorporate any library of my preference
`,
		},
		{
			id: 201,
			definition: `Runtime to execute JS`,
			description: `
I can setup my projects, manage asynchrony, import packages and modules
I have some practice in Node built in packages like \`node:path\`, \`node:fs\` and even \`node:test\`
Sometimes I even resolve completely unrelated problems by writing and executing a script with Node		
`,
		},
		{
			id: 202,
			definition: `Superset of JS with static typing during development`,
			description: `
I usually include typescript in my projects every time I can, or failing that, JSDoc with TS declaration files
I don't have very complex knowledge but I can use utility types, and create my own types and templates
I could write my own config files but usually let the framework that I'm using to do it for me
It's annoying at certain times, like wrong inferences, but still makes everything so much easier		
`,
		},
		{
			id: 203,
			definition: `Minimalist framework for creating web applications`,
			description: `
I can create a REST API, with url params to filter results
Structure project using MVC architecture
Use it to host my client files, created with some framework with Astro or React
`,
		},
		{
			id: 204,
			definition: `Library with an SQL like API and type safe`,
			description: `
At the moment this is my preferred ORM to access databases in my projects
I'm gaining practice and it facilitates obtaining data by having a defined typing
`,
		},
		{
			id: 205,
			definition: `Package for validating schemas and static typing`,
			description: `
I started using it shortly ago, it facilitates a lot managing the received data integrity
Plus providing typing for the validated schemas
`,
		},
		{
			id: 206,
			definition: `Testing framework that can be used along Vite`,
			description: `
I recently started writing some tests with it when developing code and was actually helpful
I hadn't tried TDD before, but doing it helped me develop functions otherwise I wouldn't have know how to start
So I'm able to, test by test, make sure everything works

Currently I can do unit tests, but don't have too much experience with integration or end to end ones
specially when it involves mocking resources
`,
		},
		{
			id: 301,
			definition: `Shell scripting language`,
			description: `
I don't have much experience but I often find myself creating my own scripts when I need them
It's definitely not my favorite thing, but when a problem appears I can overcome it with a solution in just a few hours
I'm not scared to jump into configurations of CLI programs like neovim or tmux
I end up having lot of aliases or bash functions to use frequently
`,
		},
		{
			id: 302,
			definition: `Open source operating system`,
			description: `
I usually choose this system when I got the chance and understand it's general functioning
I'm used to work with file related Unix or GNU tools
I can look for, manage and install packages and applications
I got experience mainly with Debian based distros
`,
		},
		{
			id: 303,
			definition: `SQL database stored in a file`,
			description: `
I've knowledge of the SQL language, and since I don't do really complex stuff, I'm not bothered by the limitations of this particular engine
I query data, filter it, group it, and in cases transform it with functions, apart of using subqueries and common joins
And by its simplicity to be included in a project is what I like to use the most
`,
		},
		{
			id: 304,
			definition: `SQL database system in a server`,
			description: `
I can use it as any other SQL engine, also managing it's users and hosts
But by not having where to host it and requiring more configurations I don't have much practice
`,
		},
		{
			id: 401,
			definition: `Version control tool`,
			description: `
I can use local and remote repositories, create branches, do commits, merges and rebases
I know its different parts, and constantly move the files through them, changing their states in turn

I use this tool frequently and I like nothing more than gaining practice with it, it has helped me in so many ways
I've never had so much confidence while developing a project that the more I use its functionality
And even those couple of times I made a mistake, I could learn to revert it easily

I create local branches when developing each feature, to later be rebased and merged fast forward to the main branch
In addition to also saving certain changes locally in stash
For the format of the commits I use conventional commits
`,
		},
		{
			id: 402,
			definition: `Webpage to share and host code`,
			description: `
I started creating and uploading my own projects to this platform
I didn't have the opportunity to participate in group works yet
I use the feature of Github Pages to host static pages like this one
And lately I even learned to use SSH and GPG keys for some reason
`,
		},
		{
			id: 403,
			definition: `Low level programming language`,
			description: `
I'm pretty far from being an expert, but I know the fundamentals about typing, structs and use of pointers
Which has really made easier the learning of new languages and concepts, since I could apply that knowledge, adapting it at certain points
`,
		},
		{
			id: 404,
			definition: `Platform for programming microcontrollers or Arduino boards with C++`,
			description: `
During Highschool I made numerous small projects and exercises in arduino with its libraries
It was my first experience with programming, where I learned the basics of C++
I really enjoyed looking the documentation and learning something new I could use each day
This helped me enter this world in a fun and interactive way
`,
		},
	],
	es: [
		{
			id: 101,
			definition: `Lenguaje de marcado para la estructura de la web`,
			description: `
Tengo conocimiento de la variedad de etiquetas HTML, y capacidad para maquetar webs utilizando tags semánticos
`,
		},
		{
			id: 102,
			definition: `Lenguaje para estilado de la web`,
			description: `
Tengo experiencia utilizando múltiples de las propiedades disponibles
Creación de layouts usando tanto flexbox como grid
Aun así tengo algo de dificultad para el diseño inicial de las páginas

Frecuentemente experimento con gradients, transitions, transforms, y menos seguido cosas como selectores \`:has\`, \`:is\`, y \`:where\`, y scroll snapping cuando son útiles
Al encontrar un problema empleo diferentes estrategias y algunos trucos visuales hasta conseguir la vista que quiero

Siempre intento que mi página sea responsiva
o al menos visualizable en todos los dispositivos hasta que pueda pulir los detalles
`,
		},

		{
			id: 103,
			definition: `Lenguaje de programación nativo de la web`,
			description: `
Tengo mucha facilidad para desenvolverme con el lenguaje y a través de casi cada problema que encuentre
Experiencia con quirks de este, como casts implícitos, y uso de distintos tipos de datos como Set y Map
Puedo usarlo para manipular el DOM, obtener recursos de un servidor, ejecutar tareas por un tiempo determinado, crear eventos y más
`,
		},
		{
			id: 104,
			definition: `Liberia para diseño de interfaces de usuario`,
			description: `
Este es el primer framework UI que estoy aprendiendo
No se todo aún pero me gusta el uso de componentes y como maneja el estado
Estoy poco a poco mejorando en el uso de hooks y aprendiendo más sobre como estructurar mis proyectos	
`,
		},
		{
			id: 105,
			definition: `Framework para estilado con utility classes`,
			description: `
Últimamente estuve aprendiendo esta tecnología y es más fácil de lo que parece
No tengo tanta experiencia pero estuve incorporandola y mejorando fácilmente por mis conocimientos de CSS puro
`,
		},
		{
			id: 106,
			definition: `Librería para diseñar utilizando componentes prehechos`,
			description: `
Bueno en este tengo muy poca experiencia
Lo usé muy pocas veces, pero aún así fui capaz de hacer que la página se vea bien
No lo elegiría ya que me gusta personalizar casi todo, pero entiendo su sistema de columnas y sus componentes en verdad ayudan a simplificar el trabajo en múltiples casos
Por lo que aún podría ser capaz de manejarlo si lo necesito
`,
		},
		{
			id: 107,
			definition: `Framework para creación de páginas web agnóstico a la UI`,
			description: `
Este es actualmente mi elección por defecto al decidir crear una página
Es bastante simple, lo que funciona ya que no siempre necesito mucha interactividad
Y también es muy similar a HTML, lo que lo hace muy intuitivo
además al ser agnóstico a la UI, puedo empezar con esto y luego incorporar cualquier librería de mi preferencia
`,
		},
		{
			id: 201,
			definition: `Entorno de ejecución para JS`,
			description: `
Puedo configurar mis proyectos, manejar la asincronía, importar paquetes y módulos
Usar los paquetes nativos como \`node:path\`, \`node:fs\` e incluso \`node:test\`
A veces incluso resuelvo problemas completamente no relacionados escribiendo y ejecutando un script con Node
`,
		},
		{
			id: 202,
			definition: `Superset de JS con tipado estático durante el desarrollo`,
			description: `
Suelo usar typescript para mis proyectos cada vez que puedo, o en su defecto, JSDoc con declaraciones en archivos de TS
No tengo conocimientos complejos pero puedo usar utility types, y crear mis propios types y templates
Puedo escribir mi propia configuración pero suelo dejar que el framework que este usando lo haga por mi
Es molesto por momentos, como con inferencias incorrectas, pero aún así hace todo mucho más fácil	
`,
		},
		{
			id: 203,
			definition: `Framework minimalista para crear aplicaciones web`,
			description: `
Puedo crear una API REST, con parámetros en la url para filtrar resultados
Estructurar proyecto con arquitectura MVC
Usarlo para mostrar mis archivos de cliente, creados con algún framework como Astro o React`,
		},
		{
			id: 204,
			definition: `Librería con una API similar a SQL y tipado`,
			description: `
Esta es mi ORM preferida para usar en mis proyectos
Voy ganando práctica y me facilita la obtención de datos al tener tipado definido
`,
		},
		{
			id: 205,
			definition: `Paquete para validación de esquemas con tipado inferido`,
			description: `
Empecé a usar esto hace poco, y facilita bastante el manejar la integridad de los datos recibidos
además de proporcionar tipado para los esquemas validados
`,
		},
		{
			id: 206,
			definition: `Framework de testing que puede ser usado junto a Vite`,
			description: `
Recientemente comencé a hacer algunas pruebas con éste mientras desarrollaba código y fue de hecho útil
No había probado TDD antes, pero hacerlo me ayudó a desarrollar funciones que de otra forma no sabría cómo empezar
Por lo que soy capaz de, prueba tras prueba, asegurarme que todo funciona

Actualmente puedo hacer unit tests, pero no tengo mucha experiencia con las integration o end to end, especialmente cuando se trata de simular recursos
`,
		},
		{
			id: 301,
			definition: `Lenguaje de scripting de terminal`,
			description: `
No tengo mucha experiencia pero a menudo termino creando mis propios scripts cuando los necesito
Definitivamente no es mi cosa favorita, pero al encontrar un problema puedo salir con una solución sólo en unas horas
Por eso tampoco me da miedo adentrarme en configuraciones de mis programas CLI como neovim o tmux
Termino teniendo montones de alias y funciones de bash para uso frecuente
`,
		},
		{
			id: 302,
			definition: `Sistema operativo de código abierto`,
			description: `
Usualmente elijo este sistema cuando tengo la oportunidad y entiendo su funcionamiento general
Estoy acostumbrado al uso de herramientas Unix o GNU relacionadas a archivos
Puedo buscar, administrar e instalar paquetes o aplicaciones
Tengo experiencia principalmente con distros basadas en Debian
`,
		},
		{
			id: 303,
			definition: `Base de datos SQL almacenada en un archivo`,
			description: `
Tengo conocimiento del lenguaje SQL, y al no hacer nada realmente complejo, no me molestan las limitaciones de este motor en particular
Yo selecciono data, la filtro, agrupo, y en casos transformo con funciones, aparte de usar subqueries y joins comunes
Y por su simpleza para ser incorporado en un proyecto es lo que más me gusta usar
`,
		},
		{
			id: 304,
			definition: `Sistema de bases de datos SQL en un servidor`,
			description: `
Puedo usarlo como cualquier motor de SQL, además de administrar sus usuarios
Pero al no tener servidor donde hostear esto y requerir mas configuración no tengo mucha práctica
`,
		},
		{
			id: 401,
			definition: `Herramienta de control de versiones`,
			description: `
Puedo usar repositorios locales y remotos, crear branches, hacer commits, merges y rebases
Conozco sus diferentes partes, y constantemente muevo los archivos a través de éstas, cambiando a su vez sus estados

Uso esta herramienta frecuentemente y nada me gusta mas que ganar práctica con ella, me ha ayudado de tantas maneras
Nunca había tenido tanta seguridad mientras desarrollaba de un proyecto que cuando mas uso su funcionalidad
E incluso ese par de veces que cometí un error, pude aprender a revertirlo fácilmente

Creo branches locales mientras desarrollo cada característica, para luego hacer un rebase y un merge fast forward a la branch principal
además de también guardar ciertos cambios localmente en el stash
Para el formato de los commits uso conventional commits
`,
		},
		{
			id: 402,
			definition: `Página para compartir y hostear código`,
			description: `
Empecé a crear y subir mis propios proyectos a esta plataforma
No tuve oportunidad de participar en trabajos grupales aún
Uso la característica de Github Pages para hostear páginas estáticas como esta misma
Y últimamente aprendí incluso a usar claves SSH y GPG por alguna razón
`,
		},
		{
			id: 403,
			definition: `Lenguaje de programación de bajo nivel`,
			description: `
Estoy muy lejos de ser un experto, pero se los fundamentos sobre tipado, estructuras, y uso de punteros
Lo que me ha facilitado bastante el aprendizaje de nuevos lenguajes y conceptos, al poder aplicar esos conocimientos, adaptándolos en ciertos puntos
`,
		},
		{
			id: 404,
			definition: `Plataforma para programar microcontroladores o placas Arduino con C++`,
			description: `
Durante la secundaria realicé numerosos proyectos pequeños y ejercicios en arduino usando sus librerías
Fue mi primer experiencia con la programación, donde aprendí lo básico de C++
Realmente disfruté leyendo la documentación y aprender algo nuevo que pudiera usar cada día
Esto me ayudó a entrar a este mundo de una forma divertida e interactiva
`,
		},
	],
};
