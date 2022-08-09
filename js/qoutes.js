const  container = document.querySelector('.qoutes');

address=[
    {
        qoutes:" قال ابن القيم رحمه الله : قد أجمع عقلاء كل أمة على أنّ النعيم لا يُدرك بالنعيم وأن من آثر الراحة فاتته الراحة، وأنه بقدر الأهوال واحتمال المشاق تكون الفرحة واللذة، فلا فرحة لمن لا همّ له، ولا لذة لمن لا صبر له، ولا نعيم لمن لا شقاء له، ولا راحة لمن لا تعب له"
    },
    {
        qoutes:"عن أنس بن مالك رضي الله عنه عن رسول الله صلى الله عليه وسلم قال : ( اللهم إني أعوذ بك من العجز ، والكسل ، والجبن ، والبخل ، والهرم ، والقسوة ، والغفلة ، والعيلة ، والذلة ، والمسكنة ، وأعوذ بك من الفقر ، والكفر ، والفسوق ، والشقاق ، والنفاق ، والسمعة ، والرياء ) "
    },
    {
        qoutes:"عن أنس بن مالك -رضي الله عنه- عن النبي -صلى الله عليه وسلم- أنه قال: (طلَبُ العِلمِ فَريضةٌ علَى كلِّ مُسلِمٍ)"  
    },
    {
        qoutes:"ألَا إنَّ الدُّنيا مَلعونَةٌ مَلعونٌ ما فيها إلَّا ذِكْرَ اللهِ، وما والاه، وعالِمًا أو مُتعَلِّم" 
    },
    // {
    //     qoutes:"  "
       
    // },
    // {
    //     qoutes:"  "
       
    // },
    
]

// get random qoutes
function getRandomQoutes(){
    const random = Math.floor(Math.random() * address.length);
    return address[random];
}

var qoutes = getRandomQoutes();
 
 
    const div= new_ele( container, 'p',null,'alert alert-primary', null  );
    new_ele( div, 'p', qoutes.qoutes , null, {name:"id",val:"qoutes_val"} );
 
 





