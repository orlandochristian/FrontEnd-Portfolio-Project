

function loadImg(raza) {

    let borrar = document.querySelectorAll(".column")
    if(borrar.length >0) {
       for (const x of borrar) {
          x.remove()
       }
    }

  if (raza != "Choose a dog Breed") { 
      fetch(`https://dog.ceo/api/breed/${raza}/images`).then( (response) => response.json()).then( (perro) => {
        pegarImg(raza,perro.message)
      })
  }   
}

function pegarImg (raza,images) {
  
let photogallery = document.querySelector(".photo-gallery")
photogallery.style.columnGap = "8px"
photogallery.style.padding = "8px"
 // ----------------column 1 ------------------------------------------------------//    
    const column1 = document.createElement("div")
     column1.setAttribute("class","column") 
   
     const div1 = document.createElement("div")
     div1.setAttribute("class","single-img")
    
     const img1 = document.createElement("img")
     img1.setAttribute("src",`${images[6]}`)
     img1.setAttribute("alt","")
     
     const div2 = document.createElement("div")
     div2.setAttribute("class","single-img")
     const img2 = document.createElement("img")
     img2.setAttribute("src",`${images[1]}`)
     img2.setAttribute("alt","")
     
     div1.append(img1)
     div2.append(img2)
     column1.append(div1, div2)

// ----------------column 2 ------------------------------------------------------//
const column2 = document.createElement("div")
     column2.setAttribute("class","column") 
   
     const div3 = document.createElement("div")
     div3.setAttribute("class","single-img")
    
     const img3 = document.createElement("img")
     img3.setAttribute("src",`${images[2]}`)
     img3.setAttribute("alt","")
     
     const div4 = document.createElement("div")
     div4.setAttribute("class","single-img")
     const img4 = document.createElement("img")
     img4.setAttribute("src",`${images[4]}`)
     img4.setAttribute("alt","")
     
     div3.append(img3)
     div4.append(img4)
     column2.append(div3, div4)

// ----------------column 3 ------------------------------------------------------//
     const column3 = document.createElement("div")
     column3.setAttribute("class","column") 
   
     const div5 = document.createElement("div")
     div5.setAttribute("class","single-img")
     const img5 = document.createElement("img")
     img5.setAttribute("src",`${images[3]}`)
     img5.setAttribute("alt","")
     
     const div6 = document.createElement("div")
     div6.setAttribute("class","single-img")
     const img6 = document.createElement("img")
     img6.setAttribute("src",`${images[5]}`)
     img6.setAttribute("alt","")
     
     div5.append(img5)
     div6.append(img6)
     column3.append(div5, div6)
 
// ----------------column 4 ------------------------------------------------------//

  //get description and post the last picture

  const column4 = document.createElement("div")
  column4.setAttribute("class","column") 

  const div7 = document.createElement("div")
  div7.setAttribute("class","single-img")
  const h3 = document.createElement("h3")
  h3.setAttribute("text-align","center")
  h3.textContent =  raza.charAt(0).toUpperCase() + raza.slice(1)
  
  const p = document.createElement("p")
  p.textContent = getDesc(raza) 
  

  const div8 = document.createElement("div")
  div8.setAttribute("class","single-img")
  const img7 = document.createElement("img")
  img7.setAttribute("src",`${images[0]}`)
  img7.setAttribute("alt","dog_img")
  
  div7.append(h3, p)
  div8.append(img7)
  column4.append(div7, div8)

photogallery.prepend(column1, column2, column3, column4)
    
}



const picBox = document.querySelector(".pic-box")
function pegarFoto(value) {
  let imgbox = document.createElement("img")
  imgbox.setAttribute("src",`https://http.dog/${value}.jpg`)
  imgbox.setAttribute("alt","")
  imgbox.setAttribute("class","borrar")
  picBox.append(imgbox)
}


const btndiv = document.getElementById("divor")


btndiv.addEventListener("click",(event) => {
  event.preventDefault()
    picBox.querySelectorAll(".borrar")[0].remove()
    pegarFoto('499')
})

const btnarte = document.getElementById("arte")
btnarte.addEventListener("click",(event) => {
  event.preventDefault()
    picBox.querySelectorAll(".borrar")[0].remove()
    pegarFoto('218')
})

const btnhallow = document.getElementById("hallow")
btnhallow.addEventListener("click",(event) => {
  event.preventDefault()
    picBox.querySelectorAll(".borrar")[0].remove()
    pegarFoto('406')
})

const btncolle = document.getElementById("colle")
btncolle.addEventListener("click",(event) => {
  event.preventDefault()
    picBox.querySelectorAll(".borrar")[0].remove()
    pegarFoto('504')
})

pegarFoto('418')





function getDesc(raza) {
     let des = description.find(x => x.name === raza)
     if (des === undefined) {
        return "No Desc Found"
     }
     return des.desc
    
    //return ( (description.find(x => x.name === raza)).desc)
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      
      x.style.display = "flex";
      x.style.gap = "25px"
      x.style.paddingTop = "30px"
      x.style.paddingRight = "60px"

    }
  }






  


  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //--------------------------------------------------------- End of the Functions ---------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------------------------------------------------------------------//




















































  let description = [
    {name: "affenpinscher",desc:"Affenpinschers are courageous, bold, and often feisty. Basic obedience training is recommended. The breed has an undeserved reputation as being difficult to train because Affenpinschers are independent minded and can be stubborn."},
    {name: "african",desc:"While they generally have an exceptionally friendly and patient demeanor when it comes to people of all ages, they still require a sense of space and are sometimes uncomfortable with an abundance of physical contact."},
    {name: "airedale",desc:"Airedales are very intelligent dogs, but have a bit of stubbornness or independence. They require a firm, but gentle hand from early puppyhood. Most Airedales are not big barkers, but true to their terrier heritage they can be serious diggers and chewers. Airedales need human interaction to be happy."},
    {name: "akita",desc:"The Akita is a bold and willful dog, naturally wary of strangers but extremely loyal to their family. They are alert, intelligent, and courageous. They tend to be aggressive toward other dogs, especially those of the same sex. They are best suited to a one-dog household."},
    {name: "appenzeller",desc:"The Appenzeller Sennenhunde originated as an all-around farm dog breed, who stayed busy herding the livestock, guarding the farm, and pulling carts in their native Switzerland. Today’s Appenzellers still have the energy, smarts, and self-confidence that makes for valuable working dogs — but they’re anything but low-maintenance."},
    {name: "australian" ,desc:"Bred to perform demanding tasks, the Australian is extremely alert, intelligent, watchful and courageous. Highly trustworthy and reliable, they have a tenacious sense of duty. Loyal to their owners and wary of strangers, they are fiercely protective when used as a watch dog, although they are not barkers."},
    {name: "basenji" ,desc:"Basenjis are energetic, inquisitive, and very active. They require lots of regular exercise to keep them from becoming bored. Boredom can lead to destructive behavior. Long play sessions in a well-fenced yard or securely on lead are required."},
    {name: "beagle" ,desc:"Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and'¿thanks to its pleading expression'¿cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing."},
    {name: "bluetick" ,desc:"The sleekly beautiful Bluetick Coonhound is a sweet and affectionate charmer who might enjoy snoozing in the shade, but in pursuit of quarry he is relentless, bold, and single-minded. His off-the-charts prey drive must be channeled."},
    {name: "borzoi" ,desc:"Borzoi are intelligent and very affectionate with their owners, but are also independent and sometimes stubborn, so training may be a challenge. Patience and consistency are key. Overall they are usually gentle, well-mannered companions."},
    {name: "bouvier" ,desc:"Despite the huge size, the Bouvier des Flandres is a calm and docile dog known for having a pleasant nature, and is a great family pet. The Bouvier can get along well with other animals if raised with them; if not, some can be aggressive toward other dogs. The Bouvier is easy to train."},
    {name: "boxer" ,desc:"Boxers are intelligent, high-energy, playful dogs that like to stay busy. Their temperament reflects their breeding. They prefer to be in the company of their owners and are loyal pets that will fiercely guard their family and home against strangers. Few boxers bark excessively."},
    {name: "brabancon" ,desc:"The Petit Brabançon is amiable, curious and intelligent. It adapts easily to the habits of its family. Especially when dealing with children, the Brabançon is very affectionate and loves to play with them. It is hardly possible to resist its cheerful charm."},
    {name: "briard" ,desc:"The Briard loves to spend time inside the house and has proved itself a loving breed with a pleasant personality. Playful in nature, Briard puppies especially require socialization. This intelligent, independent, and confident dog is also very devoted to its master, making for an excellent companions or guard dog."},
    {name: "buhund" ,desc:"The densely coated Norwegian Buhund, a Nordic spitz-type closely associated with the Vikings, is a medium-sized cold-weather worker adept at herding and guarding. As family dogs, Buhunds are smart, affectionate, and steadfastly devoted."},
    {name: "bulldog" ,desc:"Kind but courageous, friendly but dignified, the French Bulldog is a thick-set, low-slung, well-muscled bruiser whose 'sourmug' face is the universal symbol of courage and tenacity. These docile, loyal companions adapt well to town or country. "},
    {name: "bullterrier" ,desc:"Among the most comical and mischievous citizens of dogdom, the Bull Terrier is playful and endearing, sometimes stubborn, but always devoted. These unique 'eggheads' are exuberant, muscular companions who thrive on affection and exercise."},
    {name: "cattledog" ,desc:"Cattle dog is extremely alert, intelligent, watchful and courageous. Highly trustworthy and reliable, they have a tenacious sense of duty. Loyal to their owners and wary of strangers, they are fiercely protective when used as a watch dog, although they are not barkers."},
    {name: "chow" ,desc:"The Chow Chow can be traced back almost 2,000 years when they were bred as hunting and guard dogs in China. Known for their cute, teddy bear-like appearance and a unique blue-black tongue, the Chow Chow is both independent but also very loyal."},
    {name: "clumbers" ,desc:"Clumbers are sweet and easygoing at home, but these outdoorsy fellows can be relentless on scent. Smart and eager-to-please Clumbers respond well to training. Though a bit wary around strangers, Clumbers are friendly dogs who bark only when they have something to say, and so make indifferent watchdogs."},
    {name: "cockapoo" ,desc:"Cockapoos are intelligent, loyal and with good training and stimulation, make brilliant pets.The perfect blend between the outgoing personality of the Cockapoo with the low-shedding qualities of the Poodle"},
    {name: "collie" ,desc:"The Border Collie dog breed is a native of Scotland, mostly of the Highland regions but also bred in the Scottish Lowlands and northern England, where they were used primarily as a herding dog. They’re great family companions and are still capable herding dogs."},
    {name: "coonhound" ,desc:"These dogs are first and fundamentally working dogs – they hunt large and small game. Though good-natured and easygoing, these hardy hounds are so in need of hard physical exercise that they belong with an owner who will take them hunting, jogging (on dirt or grass, not concrete), hiking, and/or swimming."},
    {name: "corgi" ,desc:"Among the most agreeable of all small housedogs, the Corgi is a strong, athletic, and lively little herder who is affectionate and companionable without being needy. They are one the world's most popular herding breeds."},
    {name: "cotondetulear" ,desc:"The Coton de Tulear, 'Royal Dog of Madagascar,' is a bright, happy-go-lucky companion dog whose favorite activities include clowning, cavorting, and following their special human around the house. The Cotondetulear is small but robustly sturdy."},
    {name: "dachshund" ,desc:"Temperament. Dachshunds are lively, playful, and clever. They have a reputation for being on the stubborn side, too. Fiercely loyal, this popular breed often bonds very closely with just one person and can get jealous easily and become lonely if not given enough attention by the object of their affection."},
    {name: "chihuahua" ,desc:"They like attention and are loyal to their owners. Even though they are considered lap dogs, they are active and like to be kept occupied. Chihuahuas are good family pets when treated respectfully, but they have a reputation for snapping at strangers or small children who may be threatening to their diminutive size."},
    {name: "dhole",desc:"The dhole has a broad skull and a short, broad muzzle. The fur on the back and flanks is reddish brown, while the neck, chest and undersides are white or lightly coloured. The dhole is 90cm in length, 50cm in shoulder height and has a tail of up to 45cm. It weighs between 12 and 20kg."},
    {name: "dingo",desc:"The dingo can stand more than 60cm high and weigh between 13–23kg, depending on its geographic location. Dingoes are naturally lean like a greyhound, with large ears permanently pricked and tails often marked with a white tip. Although mainly sandy-yellow in colour, some dingoes may also be black and tan."},
    {name: "doberman",desc:"Dobermans are very intelligent, learn easily, respond quickly, and make loving and fun companions. However, they are very strong dogs and can become pushy, destructive, and unmanageable if not raised properly. Socialization starting in puppyhood is imperative, as is obedience training."},
    {name: "elkhound",desc:"Personality: The Norwegian Elkhound is a fearless, reliable, energetic and extremely loyal companion. These dogs may be a little reserved around strangers, but they will greet family members and other people they know with gusto. Like other northern-type dogs, the Norwegian elkhound is a relatively independent animal."},
    {name: "entlebucher",desc:"The Entlebucher Mountain Dog, tricolor 'Laughing Dog' of the Swiss Alps, is a rugged and determined mover of cattle. These spirited, energetic workers and athletes are independent problem solvers and are happiest with a job to perform."},
    {name: "eskimo",desc:"Neither shy nor aggressive, Eskies are always alert and friendly, though a bit conservative when making new friends. The American Eskimo Dog comes in three sizes'¿standard, miniature, and toy'¿standing as tall as 19 inches at the shoulder or as short as 9 inches."},
    {name: "finnish",desc:"The Finnish spitz is home-loving and friendly. The dog is loyal to his family, playful, and yet patient with children, and is generally good with other pets. The Finnish spitz is leery of people he does not know and will guard by barking if a stranger comes around, but he is not considered an aggressive dog."},
    {name: "frise",desc:"The breed's glory is a white hypoallergenic coat, plush and velvety to the touch, featuring rounded head hair that sets off the large, dark eyes and black leathers of the nose and lips. Bichons are adaptable companions who get on well with other dogs and children."},
    {name: "germanshepherd",desc:"Personality: German shepherd dogs get along well with children and other pets if raised with them, but in keeping with their guarding instincts, they tend to be leery of strangers. The breed is considered to be smart and easy to train. Some poorly bred German shepherd dogs can be high-strung and nervous."},
    {name: "dalmatian",desc:"Dalmatians are highly energetic, playful and sensitive dogs. They are loyal to their family and good with children, although some Dalmatian experts caution that the breed may be too energetic for very small children. These dogs are intelligent, can be well trained and make good watchdogs."},
    {name: "greyhound",desc:"With his mild, sensitive personality, he needs a gentle approach in training, never harsh. Greyhounds are more interested in doing things *with* you than *for* you. They are very affectionate with their families, though they tend to be reserved with strangers."},
    {name: "groenendael",desc:"The Groenendael is an alert and sensitive breed– he always knows what's going on around him and he can be very protective of his family and his territory. These dogs form very strong bonds with family and they can be very affectionate and playful as well."},
    {name: "havanese",desc:"Havanese are affectionate and happy dogs. They do not make good kennel dogs and prefer being with their owners. They are active dogs and enjoy learning tricks and playing games with their owners. Havanese are intelligent and trainable."},
    {name: "hound",desc:"They are agile and speedy. Scent hounds, on the other hand, smell their way to what they are trying to find. They're tough, but slow. Both types of hound dogs are very inquisitive, independent creatures. They can be trained, but must understand why they are being taught to do something."},
    {name: "husky",desc:"Siberian huskies are classic northern dogs. They are intelligent but somewhat independent and stubborn. They thrive on human company, but need firm, gentle training right from puppy hood. These are dogs bred to run, and their love of running may overcome their love for their guardians at times. Siberian huskies tend to be friendly with people, including children."},
    {name: "keeshond",desc:"Keeshonden are handsome, intelligent dogs with a delightful personality. Their playful, affectionate nature makes them ideal family pets. Unlike other northern breeds, the Keeshonden are relatively easy to train. Rarely are they nuisance barkers, but they will bark a warning that a stranger is near."},
    {name: "kelpie",desc:"The kelpie is a tough, independent, highly intelligent dog that is extremely loyal. They are very obedient and are exceptionally alert, they are eager to please and they make a devoted companion; however they have an inexhaustible amount of energy which makes them unsuitable for suburban living."},
    {name: "komondor",desc:"The Komondor is a loving dog who needs little exercise and likes to keep its human companions in sight, often following them. Intelligent with a keen instinct for protection, the Komondor's independent thought process can make this breed ill-suited to many. Always alert, the Komondor is a loud barker."},
    {name: "kuvasz",desc:"Kuvasz Dog Breed Information and Personality Traits. Known for being gentle, protective and easy to care for, the Kuvasz can be independent and aggressive and therefore needs firmness during the training and socialization period. In spite of its imposing size, the Kuvasz requires remarkably little food."},
    {name: "labradoodle",desc:"Extremely friendly and outgoing, the Labradoodle's characteristics are similar to that of a small child – playful, busy, eager to please and curious about the world around them. Easy going and keen to be friends with everyone."},
    {name: "labrador",desc:"Labs are friendly, outgoing, and high-spiritedcompanions who have more than enough affection to go around for a family looking for a medium-to-large dog."},
    {name: "leonberger",desc:"The Leonberger is a lush-coated giant of German origin. They have a gentle nature and serene patience and they relish the companionship of the whole family. A huge and powerful dog, yes, but the Leonberger is also known for his aristocratic grace and elegance."},
    {name: "lhasa",desc:"Lhasa Apso Dog Breed Information and Personality Traits. Considered easy keepers affectionate and a good companion, the Lhasa Apso was bred as a guard dog and therefore can be aloof, stubborn and demonstrate a sharp, loud bark. The Lhasa Apsos are long-lived dogs, routinely going into their late teens."},
    {name: "malamute",desc:"Makes a loyal and bold companion. It loves to run, pull, and roam, and must be confined in a secure yard. It is sociable toward people, but can be aggressive toward strange dogs or animals. Strong willed and independent, so that it needs training with a firm hand from a young age."},
    {name: "malinois",desc:"The Belgian sheepdog Malinois is smart and obedient. He has strong protective and territorial instincts. He needs extensive socialization from an early age and firm but not harsh training."},
    {name: "maltese",desc:"The Maltese is gentle, affectionate, intelligent, responsive and trusting. A good family dog, Maltese are lively, playful, vigorous, and they generally enjoys learning tricks."},
    {name: "dane",desc:"Great Danes are considered gentle giants. They are moderately playful, affectionate and good with children. They will guard their home. Great Danes generally get along with other animals, particularly if raised with them, but some individuals in the breed can be aggressive with dogs they do not know."},
    {name: "deerhound",desc:"Like most sight hounds, Scottish deerhounds are very sensitive, one-family dogs. They are friendly, but not gregarious, toward strangers. As a watchdog or protection dog, they are quite hopeless."},
    {name: "mastiff",desc:"The colossal Mastiff belongs to a canine clan as ancient as civilization itself. A massive, heavy-boned dog of courage and prodigious strength, the Mastiff is docile and dignified but also a formidable protector of those they hold dear. "},
    {name: "mexicanhairless",desc:"The 3,000-year-old Xoloitzcuintli (pronounced show-low-eats-QUEENT-lee), the ancient Aztec dog of the gods, is today a loving companion and vigilant watchdog."},
    {name: "mix",desc:"A mixed breed is a domesticated animal descended from multiple breeds of the same species, often breeding without any human intervention, recordkeeping, or selective breeding. Examples include: Mixed-breed dog, a dog whose ancestry is complex or not known, also colloquially known as mutt."},
    {name: "mountain",desc:"Big, powerful, and built for hard work, the Bernese Mountain Dog is also strikingly beautiful and blessed with a sweet, affectionate nature. Berners are generally placid but are always up for a romp with the owner, whom they live to please."},
    {name: "newfoundland",desc:"The massive Newfoundland is a strikingly large, powerful working dog of heavy bone and dignified bearing. The sweet-tempered Newfie is a famously good companion and has earned a reputation as a patient and watchful 'nanny dog' for kids."},
    {name: "otterhound",desc:"Big, boisterous, and affectionate, the Otterhound was bred in medieval England for the now-outlawed activity of otter hunting. This scarce breed is known for his dense shaggy coat, webbed feet, acute sense of smell, and affinity for swimming."},
    {name: "ovcharka",desc:"The Caucasian Ovcharka or the Caucasian Shepherd dog is a serious guardian breed and should never be taken lightly. The Caucasian is bold, fearless, self-confident and fierce when a threat is present, but he is soft, devoted, kind and endearing to his family, including other family pets."},
    {name: "papillon",desc:"The quick, curious Papillon is a toy dog of singular beauty and upbeat athleticism. Despite his refined appearance, the Pap is truly a 'doggy dog' blessed with a hardy constitution. Papillon fanciers describe their breed as happy, alert, and friendly."},
    {name: "pekinese",desc:"A hallmark of the breed is their friendly, outgoing, loving personality. Pekes are affectionate and intelligent and develop very strong connections to their people. As dogs who for centuries lived in palaces, Pekes can be as serenely independent as the emperors who owned them."},
    {name: "pembroke",desc:"Among the most agreeable of all small housedogs, the Pembroke Welsh Corgi is a strong, athletic, and lively little herder who is affectionate and companionable without being needy. They are one of the world's most popular herding breeds."},
    {name: "pinscher",desc:"The leggy Miniature Pinscher is known to fans as the 'King of Toys.' This proud, fearless, fun-loving toy breed of lustrous coat and a compact, wedge-shaped physique is a true personality dog, known for a high-stepping 'hackney' gait."},
    {name: "pitbull",desc:"The American Pit Bull Terrier is a companion and family dog breed. Originally bred to “bait” bulls, the breed evolved into all-around farm dogs, and later moved into the house to become “nanny dogs” because they were so gentle around children."},
    {name: "pointer",desc:"The Pointer's amiable, even temperament and alert good sense make him a congenial and trainable companion both in the field and in the home. Pointers are versatile! Many have multiple titles before and after their names, indicating their ability to perfect their inherent talents and happily learn new ones."},
    {name: "pomeranian",desc:"Pomeranians are known for being smart, curious, energetic, feisty, and bold. They are typically very playful and love to be the center of attention. They can make great pets for families but may not be the best choice for those who have small children."},
    {name: "poodle",desc:"They are lively, active, fun-loving dogs with a sense of the ridiculous. Poodles thrive on attention and can develop bad habits such as nuisance barking if ignored or left alone. The smaller poodles can be aggressive to people outside their families or to other dogs."},
    {name: "pug",desc:"Once the mischievous companion of Chinese emperors, and later the mascot of Holland's royal House of Orange, the small but solid Pug is today adored by his millions of fans around the world. Pugs live to love and to be loved in return."},
    {name: "puggle",desc:"Puggles tend to be friendly and sociable, and get along well with children and other pets, making them a great candidate for a family pet. However, they also inherit a stubborn streak from both parents which, despite high intelligence, can make them difficult to train."},
    {name: "pyrenees",desc:"The Great Pyrenees is a large, thickly coated, and immensely powerful working dog bred to deter sheep-stealing wolves and other predators on snowy mountaintops. Pyrs today are mellow companions and vigilant guardians of home and family."},
    {name: "redbone",desc:"The streamlined Redbone Coonhound, an American original, is even-tempered, mellow, and kindly at home but a tiger on the trail. Vigorous activities like hunting and swimming between long periods of rest is the rhythm of coonhound life."},
    {name: "retriever",desc:"The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work."},
    {name: "ridgeback",desc:"The Ridgeback is a devoted companion and needs to live indoors with his human family. They can be strong willed, independent, and sometimes domineering, and must be guided with a firm but patient hand from early puppyhood."},
    {name: "rottweiler",desc:"A well-bred and properly raised Rottie will be calm and confident, courageous but not unduly aggressive. The aloof demeanor these world-class guardians present to outsiders belies the playfulness, and downright silliness, that endear Rotties to their loved ones."},
    {name: "saluki",desc:"The saluki is decidedly a one-family dog, tending to be aloof, or even shy, with strangers. This is a devoted, but not particularly demonstrative, breed that will relish sitting by your side, not on your lap. Salukis are quiet at home, extremely gentle with children, and good with other dogs."},
    {name: "samoyed",desc:"These are smart, social, mischievous dogs who demand love and attention. Sammies need a very firm but loving hand in training. As pack animals, they must learn early who the alpha dog is and the alpha dog must be you. Samoyeds, the smiling sled dogs, were bred for hard work in the world's coldest locales."},
    {name: "schipperke",desc:"Schipperkes are active and curious dogs. Because of their history as companions, schipperkes do not make good kennel dogs and prefer being with their owners. They are highly intelligent and need activities to keep them occupied to prevent destructive behavior such as excessive barking, chewing and digging."},
    {name: "schnauzer",desc:"The Miniature Schnauzer, the smallest of the three Schnauzer breeds, is a generally healthy, long-lived, and low-shedding companion. Add an outgoing personality, a portable size, and sporty good looks, and you've got an ideal family dog."},
    {name: "segugio",desc:"Fleet of foot and possessed of elegance, the Segugio Italiano is a tenacious hunter with superlative stamina. Its willing nature, intelligence, gentle and docile demeanor make it ideal as a companion, and well suited for people of all ages."},
    {name: "setter",desc:"Personality: The English setter is a gentle, friendly, placid dog that is especially good with children. He is mild-mannered and sensitive and loves to both give and receive affection. These dogs are known to be alert and protective of their families and territories, but will calm down quickly when told to."},
    {name: "sharpei",desc:"Shar-Pei are strong, regal, independent guardians famous for intelligence and loyalty. They are suspicious of strangers and other dogs. Shar-Pei are serene dogs, but they will meet a perceived threat with tenacity and vigor."},
    {name: "sheepdog",desc:"The Old English Sheepdog is the archetypical shaggy dog, famous for his profuse coat and peak-a-boo hairdo, a distinctive bear-like gait, and a mellow, agreeable nature. The OES is a big, agile dog who enjoys exploring and a good romp."},
    {name: "shiba",desc:"A very confident dog, the Shiba Inu temperament is alert, loyal and lively and they tend to form strong bonds with their owners. However, they can also be quite independent and territorial with a strong hunting instinct."},
    {name: "shihtzu",desc:"Shih tzu are renowned for their perky, happy temperaments. They are lively and friendly. Shih tzu tend to get along well with people of all ages and with other dogs as well as other pets of different species. Rarely you will find a snippy shih tzu, but most are very sweet."},
    {name: "spaniel",desc:"The merry and frolicsome Cocker Spaniel, with his big, dreamy eyes and impish personality, is one of the world's best-loved breeds. They were developed as hunting dogs, but Cockers gained their wide popularity as all-around companions."},
    {name: "spitz",desc:"Spitz breeds are often loyal, intelligent, and affectionate, but they can also be independent and bold. Not always suited to the novice owner, these active dogs have working backgrounds, and their tasks ranged from helping hunters find game to hauling sleds with heavy loads to herding animals like reindeer. Their thick coats also need regular grooming to keep the shedding at bay!."},
    {name: "springer",desc:"The English Springer Spaniel is a sweet-faced, lovable bird dog of great energy, stamina, and brains. Sport hunters cherish the duality of working Springers: handsome, mannerly pets during the week, and trusty hunting buddies on weekends."},
    {name: "stbernard",desc:"The Saint Bernard does not rank very high in AKC registrations, but the genial giant of the Swiss Alps is nonetheless among the world's most famous and beloved breeds. Saints are famously watchful and patient 'nanny dogs' for children."},
    {name: "terrier",desc:"Terriers love life and are always up for a game or an adventure so they are great for owners who wants a go everywhere dog but in a smaller package! Despite being a small dog, they enjoy lots of walks and exercise."},
    {name: "tervuren",desc:"The elegant, agile Belgian Tervuren is a bright and self-assured herding dog of medium size, known to be affectionate and possessive with loved ones."},
    {name: "vizsla",desc:"Vizslas, a friendly and intelligent dog, require a high level of physical activity and considerable interaction with people. They may suffer separation anxiety and fear of loud noises such as thunderstorms."},
    {name: "waterdog",desc:"The bright and biddable Portuguese Water Dog was bred to be an all-around fisherman's helper. The robust, medium-sized body is covered by a coat of tight, low-shedding curls. PWDs are eager and athletic companions built for water work."},
    {name: "weimaraner",desc:"Weimaraners are excellent with kids and yearn to be full-fledged family members. Easy grooming, trainability, a loving nature, and a can-do-attitude make them excellent pets, as long as owners are committed to keeping them physically active and mentally engaged."},
    {name: "whippet",desc:"Whippets are gentle, non-aggressive and enjoy human companionship. They can be an apartment dog if exercised a couple of times a day. Whippets do not like being cold and hate hard surfaces. Consider a whippet if you don't mind it being on furniture."},
    {name: "wolfhound",desc:"The calm, dignified, and kindly Irish Wolfhound is the tallest of all AKC breeds. Once fearless big-game hunters capable of dispatching a wolf in single combat, Wolfhounds today are the most serene and agreeable of companions."},
  ]