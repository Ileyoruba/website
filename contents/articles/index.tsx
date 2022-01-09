interface Article {
  title: string;
  list?: string[];
  content?: any;
  references: string[];
  audio?: string;
  submitted: string;
  narrated: string;
  translated: string;
}

export const articles: Article[] = [
  {
    title: 'Eka èdè Yorùbá (Tribes of Yoruba)',
    submitted: 'Ileyoruba',
    narrated: 'Ileyoruba',
    translated: 'Ileyoruba',
    audio: 'https://www.w3schools.com/html/horse.ogg',
    references  : [],
    list: [
      'Egba- (OGUN STATE)',
      'Oyo- (OYO STATE AND BENIN REPUBLIC)',
      'Igbomina- (OSUN, KWARA, ONDO, KOGI STATES AND BENIN REPUBLIC)', 
      'Okun- (KOGI, ONDO, EKITI STATES)',
      'Itshekiri- (DELTA AND RIVERS STATES)',
      'Ijebu- (OGUN AND LAGOS)',
      'Iseyin- (OYO STATE)',
      'Owu- (OGUN AND OSUN STATE)',
      'Anago- (BENIN REPUBLIC)',
      'Ibolo- (OSUN AND KWARA STATES)',
      'Awori- (LAGOS AND OGUN STATE)',
      'Yewa- (OGUN STATE)',
      'Ekiti- (EKITI AND KWARA STATES)',
      'Ijesa- (OSUN STATE)',
      'Ilorin- (KWARA STATE)',
      'Akoko- (EDO AND ONDO STATES)',
      'Ilaje- (ONDO STATE)',
      'Ife- (OSUN STATE)',
      'Modakeke- (OSUN STATE)',
      'Ikale- (ONDO STATE)',
      'Lisabi-',
      'Agbongbo',
      'Akala',
      'Ogu- Egun',
      'Igbomina-',
      `Owo- (Ondo, Edo (Owan East, Owan west, Ovia NE, Ovia SW LGA's))`,
      'Ede Ife - (Benin Republic, Togo) ',
      'Yagba- (Kogi, Kwara)',
      'EGBERI- (ONDO STATE)',
      'Ileogbo- (OSUN STATE)',
      'Apoi igbekebo- (ONDO STATE)',
      'Eruwa- (OGUN STATE)',
      ,
    ],
  },
  {
    title: 'Understanding Yoruba Names',
    submitted: 'Ileyoruba',
    narrated: 'Ileyoruba',
    translated: 'Ileyoruba',
    audio: 'https://www.w3schools.com/html/horse.ogg',
    references  : [],
    content: () => { return <div>
      <p>
      There are many Yorùbá names whose meanings are now lost due to the fact that the words forming their roots are no longer in use. 
      For instance, ask the young Master Ọlọ́pàádé the meaning of his name and he will probably tell you that his name means &ldquo;the policeman has come&ldquo;. 
      Ask Mr. Ọlọ́paádé, his father, and he would probably tell you it means &ldquo;the owner of the staff has come&ldquo;. 
      The two of them would be wrong as Ọlọ́pàádé actually means &ldquo;the Ọpa (re|re) devotee has come&ldquo;.
      </p>
      <p style={{margin: "1rem 0"}}>
      The same goes for all other Ọpa names like Ọpatọ́lá, Ọpadọ̀tun ettc. 
      Those names show that the ancestors of the bearers of the names were worshippers or devotees of the Ọpa Cult otherwise called Awo Ọpa, one of the religious cults or secret societies proscribed by the British in colonial days. 
      </p>
      <p style={{margin: "1rem 0"}}>
      Or imagine another scenario: Pastor Ọbáfẹ́mi (re|mi|mi|re), the pastor of a Pentecostal church, is asking Deacon Ògúnyẹmí to change his name because he believes that the name of the deacon is associated with Ògún, an idol (so-called), without realizing that his own name is also idolatrous in its origin.
      </p>
      Even Professor Wọlé Ṣóyínká in his book &ldquo;The Man Died&rdquo; gave the meaning of his surname Ṣóyínká to be &ldquo;surrounded by wizards&ldquo;. This is far from being the case. 
      
      <p style={{margin: "1rem 0"}}>
      Names like Ṣóyínká, Ṣónékàn, Ṣónúgà etc. do not derive from &ldquo;Oṣó&ldquo;(wizard) but rather they derive from Òrìṣà-Oko, the Yorùbá deity of agriculture. 
      The name Ṣóyínká in full is Òrìṣàokoyínká which became shortened by a gradual declension to Ṣóókóyínká, Ṣóyímiká and finally to Ṣóyínká. 
      It is the same for all the other &ldquo;Ṣóó…&rdquo; names. 
      </p>
      <p style={{margin: "1rem 0"}}>
      If a whole Professor Ṣóyínká, a master of literature and language can be thus mistaken on the derivation and meaning of his own name, what about we lesser mortals.
      </p>
      
      <p style={{margin: "1rem 0"}}>
      It is in order to put these various misconceptions right that I am publishing this little work via this medium. 
      This list is by no means exhaustive and others inputs are welcome so it can be in writing for generations yet unborn so that the knowledge of the meaning of our names will not die out.
      </p>
      <p style={{margin: "1rem 0"}}>
      Also, if you want to know the meaning of your Yorùbá name, you are welcome to ask. 
      Àgbà ò ní tán lórílẹ̀ (the elders’ wise counsel will never be scarce in our midst). 
      The &ldquo;Okù&rdquo; (re|do) names like Okùsànyà, Okùsẹ̀hìnde, Okùsàga etc are not derived from &ldquo;Òkú&rdquo; (dò|mí), a dead person. 
      They are derived from &ldquo;Okù&ldquo;, the Ijebu deity of wealth which corresponds to &ldquo;Ajé&ldquo;, the Ọ̀yọ́ Yorùbá deity of wealth. 
      </p>
      <p style={{margin: "1rem 0"}}>
      Thus, Okùsànyà means the deity of wealth has rewarded me for my sufferings and not dead person has rewarded me for my sufferings. 
      Ọrẹ̀ (re|do)names like Ọ̀rẹ̀sànyà, Ọ̀rẹ̀dípẹ̀ etc. They do not derive from Ọ̀rẹ́, (dò|mí), friend, but from Ọrẹ̀, (re|do), a deity. 
      A phrase like &ldquo;A kìí ọmọ Ọrẹ̀ bọ Ọrẹ̀&rdquo; (you don’t use the child of Ọrẹ̀ to propitiateỌrẹ̀) comes to mind.
      </p>
      
      <p style={{margin: "1rem 0"}}>
      Igbin names like Onígbindé, Igbintádé etc do not derive from ìgbín (do|mi), snail, but rather from Igbin, (re|re), a drum beaten for the Òrìṣàálá or Ọbàtálá worship. 
      The ancestors of people bearing these names were drummers for Òrìṣàálá worshippers. 
      Ọ̀pẹ̀ (do|do) names like Ọ̀pẹ̀sèyí, Ọ̀pẹ̀tọ́lá etc do not derive from Ọ̀pẹ, (do|re), palm tree, but rather from Ọ̀pẹ̀, (do|do), an Ifá appellation.
      </p>
      
      <p style={{margin: "1rem 0"}}>
      Ọnà (re|do) Ọnàsànyà, Ọnàbánjọ: these names are not derived from ọ̀nà (road) but they derive from Ọnà (craft). 
      The name bearers of these names would be people who were craftsmen like sculptors etc in their origin.
      </p>
      
      <p style={{margin: "1rem 0"}}>
       Aláàlàdé (re|mi|do|do|mi) does not derive from àlá (do|mi), dream, but derives from Àlà (do|do), white, symbol of purity – the insignia of the Òrìṣàálá or Ọbàtálá deity and it means the owner of àlá has come, the Òrìṣàálá devotee has come and not the dreamer has come as many have supposed it means.
      </p>
      
      <p style={{margin: "1rem 0"}}>
      Elégbèdé does not derive from egbé (re|mí) – the supposed magical means of teleporting – and is not supposed to be pronounced as Elégbédé (re|mi|mi|mi) as Sunny Ade sang it in one of the records, on the Erelú of Lagos. 
      </p>
      <p style={{margin: "1rem 0"}}>
      The name is derived from ègbè (do|do) meaning support.
      </p>
      <p style={{margin: "1rem 0"}}>
      Thus, the name is more properly pronounced as Elégbèédé (re|mi|do|mi|mi) – the defender, the one who will fight or support my cause has come.
      </p>
      <p style={{margin: "1rem 0"}}>
      Onípẹ̀ẹ́dẹ́ (re|mi|do|mi|mi) does not derive from ìpẹ́ (do|mi) fish scales, but derives from ìpẹ̀ (do|do) – consolation. 
      So, it should not be pronounced as Onípẹ̀dẹ́ (re|mi|do|mi) the owner of scales has come but rather as Onípẹ̀ẹ́dẹ́ (re|mi|do|mi|mi) – the consoler has come.
      </p>

      <p style={{margin: "1rem 0"}}>
      Baba (re|re) and Ọba (re|re) name such   Babasànyà, Babafẹ́mi, Ọbadáre, Ọbafẹ́mi, Ọbasanjọ́ do not derive from father or king. 
      They both derive their roots from Ṣọ̀npọ̀nná, the deity of small-pox, which used to be referred to in reverent tone in olden days as Baba so that he would not kill them. 
      If you will recall, in olden times, the marks left on the faces of anyone who recovered from small-pox attack used to be referred to as Ila-Baba, that is father’s marks.
      </p>

      <p style={{margin: "1rem 0"}}>
      In Chief Olúṣẹ́gun Ọbásanjọ́’s book, My Watch, he gave us an insight into the origin of the names starting with Ọba. 
      Such names are related to Ọbalúaiyé (also calledṢọ̀npọ̀nná), the deity of smallpox. So the Ọba in Ọbasanjọ́, and Ọbafẹ́mi, is derived from Ọbalúaiyé and not from king.
      </p>
      <p style={{margin: "1rem 0"}}>
      So, Pastor Ọbafẹ́mi, in the hypothetical case mentioned above would do well to remove the log in his own eyes first by changing his own name first before insisting that Deacon Ògúnyẹmí should change his name.
      </p>

      <p style={{margin: "1rem 0"}}>
       Olókọ̀ (re|mi|do) does not derive from the word ọkọ̀ (re|do) – lorry or canoe and it does not mean the owner of a lorry or the owner of canoe, but it derives from the word ọ̀kọ̀ (do|do) – spear, and it means the owner, master or lord of the spear. 
      It is a war title which has become a name. It is the title borne by the group of warriors whose chosen weapons of warfare is the spear.
      </p>

       
      <p style={{margin: "1rem 0"}}>
      Adékọ̀gbẹ́ (re|mi|do|mi) does not mean the crown rejects excreta as the word ìgbẹ́ (do|mi) in the name does not mean excreta; rather it means a bush or a light forest.
      The name means the crown rejects the bush, that is to say a prince shouldn’t be involved in manual labour or farming activities. 
      Adékọ̀gbẹ́ is a name much favoured by the Ìjẹ̀bú, as they are of all Yorùbá tribes a tribe that is more averse to farm work or manual labour than any of the other Yorùbá tribes. 
      They prefer to trade instead.
      </p>

      <p style={{margin: "1rem 0"}}>
      Adé (re|mi) names like Adébóyè Adébáyọ̀ Adébọ́lá are not derived from Adé (crown) but rather they are derived from the verb dé which means to come. 
      Adébóyè means he who came at a time when chieftaincy has just entered into the family. 
      Adébáyọ̀ means he who comes to meet when a thing of joy has just come into the family and Adébọ́lá means he who comes to meet when wealth has just come into the family. 
      </p>

      <p style={{margin: "1rem 0"}}>
      Apart from the misconstrued names, there are other names whose meanings are now recondite as many people no longer know what the names mean.
      </p>
      <p style={{margin: "1rem 0"}}>
       Ṣàdáre Ṣàdẹ̀kó, Ṣàdẹ̀là etc, these names derive from the Òrìṣàálá otherwise called Ọbàtálá deity.  
      Ṣàdáre is an hyphenated form of Òrìṣàdáre. 
      The word Orisha whenever used alone invariably refers to Ọbàtálá otherwise called Òrìṣànlá. So
      those names are names of people named after the Òrìṣàálá deity.  Ṣàdáre then would mean Ọbàtálá has vindicated (me). 
      Ṣàdẹ̀kó would mean that an Ọbàtálá worshipper has arrived at Èkó (Lagos). 
      Ṣàdẹ̀là would mean Ọbàtálá has arrived into wealth.
      </p>

      <p style={{margin: "1rem 0"}}>
      Akérédolú (re|mi|mi|re|mi) means he who reduces himself in order to become a king. 
      He who humbles himself to become a king like the title of that play &ldquo;She Stoops To Conquer&rdquo; by Oliver Goldsmith.
      </p>
       
      <p style={{margin: "1rem 0"}}>
       Adéwuyì (re|mi|re|do) means the crown grows honour, that is, the crown produces honour.
      </p>
      <p style={{margin: "1rem 0"}}>
       Ọlọ́fà (re|mi|do) means the owner of arrows or the master or lord of arrows. 
      It is another war title that has become a name and it is the title given to those whose weapons of war in battle is the bow and arrow, that is archers.
      </p>
      <p style={{margin: "1rem 0"}}>
       Alókoláàrọ́ (re|mi|re|mi|do|mi) means he who has a large farm and also has a cooperative society to assist him to do the farm work. 
      </p>
      <p style={{margin: "1rem 0"}}>
      Aarọ́ is a cooperative system among the Yorùbá whereby the members agree to work jointly in the farm of each member of the group in turn until they have finished the farm-work of all the members.
      </p>

      <p style={{margin: "1rem 0"}}>
       Ọlọ́wẹ̀ (re|mi|do) means he who has an ọ̀wẹ̀ (do|do) cooperative group. Ọ̀wẹ̀ is another type of cooperative society whereby the members assist each other to work in the farm of each other. 
      Olowe is thus somebody who has a large number of people at his beck and call whom he can call upon to assist him any time in his farm or other work.
      </p>

      <p style={{margin: "1rem 0"}}>
       Apara (re|re|re) is short for Apara-ogun-bí–ẹní-palé (re|re|re|re|re|mi|re|mi|re|mi) implies he who sets war at naught.
      It means literally somebody who gets ready for war as easily as other people get ready for home affairs.
      </p>

      <p style={{margin: "1rem 0"}}>
       Ọkọ́ya (re|mi|re) means the hoe has torn into pieces. 
      It is an Àbíkú name. 
      It implies an imploration to the Àbíkú not to die again as the hoe for burial has torn into pieces.
      </p>
      <p style={{margin: "1rem 0"}}>
       Ọkọ́ṣẹ́ means the hoe has broken, same as Ọkọ́ya. 
      </p>

      <p style={{margin: "1rem 0"}}>
       Pópóọla (mi|mi|re|mi) means the avenue of Honour or nobility. 
      Pópó (mi|mi) means a broad street or avenue, Ọlá means honour or nobility. 
      </p>

      <p style={{margin: "1rem 0"}}>
       Adéṣiyan (re|mi|re|re) means the crown is good.
      </p>
      <p style={{margin: "1rem 0"}}>
       Adélabú (re|mi|mi) means the crown has passed through the deep (the sea).
      </p>
      <p style={{margin: "1rem 0"}}>
      Bánmẹ́kẹ́ (mi|re|mi|mi) means hold or sustain the rafter of the house with me. 
      Ẹkẹ (re|re) is the underlying structure upon which the leaves used to roof the house was be placed. 
      It served the purpose now served by the rafter as forming the superstructure of the roof. 
      It thus a very important part of the house or family. 
      </p>

      <p style={{margin: "1rem 0"}}>
      Fáladé (mi|re|mi) means the god of divination has intermingled with royalty, probably a name given to a child who was born of an Ifá priesthood parent and a royal parent, like the mother of the first Olówu (re|mi|re) who being a princess married his father’s priest.
      </p>

      <p style={{margin: "1rem 0"}}>
      Ọláníyan (re|mi|mi|re) means nobility has swagger, that is to say noble people have a special way in which they carry themselves.
      </p>

      <p style={{margin: "1rem 0"}}>
      Adélékè or Délékè (re|mi|mi|do) means he who comes to become a very important part of the house. 
      Eke (the rafter) being the superstructure of the roof. 
      The Adé there is not crown but is from the verb dé meaning to come or arrive.
      </p>
      <p style={{margin: "1rem 0"}}>

      Ọlúwùsì (re|mi|do|do) means kingship has increased.
      </p>
      Adébọ́ṣìn (re|mi|mi|do) means he that came to meet kingship.
      <p style={{margin: "1rem 0"}}>
      Ọṣìnbàjò (re|do|mi|do|do) – Ọṣìn-bọ̀-làjò – means the king has returned from a journey. 
      Ọṣìn (re|do) means king. Bọ̀ means to come back from àjò (do|do) which means a journey.
      </p>
      <p style={{margin: "1rem 0"}}>
      Aṣáájú or Aṣíwájú (re|re|mi|mi) means the leader of the van. 
      It is the war title of the chief of the unit that fights at the head of the army.
      </p>
      <p style={{margin: "1rem 0"}}>
      Séríkí derived from the Hausa word for king Sarkin. 
      He is the head of all the junior war chiefs.
      </p>
      <p style={{margin: "1rem 0"}}>
       Sàrùmí (do|do|mi) is another war title given to the head of the Cavalry, that is the unit of the army that fight with horses or on horseback.
      </p>
       Aláásà (re|mi|mi|do) is a war title that has now become a name. 
      It does not refer to aasa tobacco, but to asà (re|do) the shield. 
      Aláásà means the owner or lord of the shield, that is the shield bearer, perhaps of the king.
      <p style={{margin: "1rem 0"}}>
      Òòṣàdípẹ̀ or. Òrìṣàdípẹ̀. The deity (Obatala) has used this one (the newly born baby) to console by using him to replace a loss recently suffered by the family.
      </p>

      <p style={{margin: "1rem 0"}}>
      Ṣọ́nibárẹ́ (mi|re|mi|mi) – Ṣọ́-ẹni-tí–ò-nbá-ṣe-ọ̀rẹ́ – means be careful in choosing whom you allow to get close to you.

      </p>

      <p style={{margin: "1rem 0"}}>

      Èésúọlá (do|mi|mi|re|mi) means the pool that is the reservoir of honour or nobility 
      </p>

      <p style={{margin: "1rem 0"}}>

      Bámgbégbìn (mi|re|mi|do) means assist me to carry the Igbin. 
      It is a name borne by drummers for Orisala worship. (Igbin is the drum beaten in the worship of Òrìṣàálá/Ọbàtálá deity).
      </p>

      <p style={{margin: "1rem 0"}}>


      Tẹ̀là (Tẹ̀llà) (do|do) – Tẹ̀ẹ́-kó-là (do|mi|mi|do) – is a name borne only by Ọ̀yọ́ princes and it means bend or bow in order to become wealthy.

      </p>

      <p style={{margin: "1rem 0"}}>

      Ọládòyìbó (re|mi|do|do|mi) – Ọlá-da-iyì-bòó – means Honour surrounds him.

      </p>

      <p style={{margin: "1rem 0"}}>

       Ọlásọpé (re|mi|re|mi) means honour has emerged completely. 
      
      </p>

      <p style={{margin: "1rem 0"}}>
      Kòtóyẹ́ (do|mi|mi) is short for Kò-tó-yẹ́-sí  (do|mi|mi|mi), which means not worthy of being honoured, a name given to a child believed to be an Àbíkú because the Yorùbá believe that such a child if shown any love or regard by being given sweet and affectionate names would go back to his group of bad children but if shown he is despised and of scant regard and is expected by his parents to die anytime, he would stay.
      Because Abikus have a perverse tendency to do just the opposite of what you expect them to do.
      For that reason, they are given derogatory names like Kòtóyẹ́sí Ajá (dog) etc. 
      </p>

      <p style={{margin: "1rem 0"}}>

      Bámgbóṣé (mi|re|mi|mi) means assist me in carrying the Oṣe, that is Sango’s wand. 
      It is a name given to children born by Ṣàngó worshippers. 
      </p>
      </div>
      },
  },
  {
    title: 'Parable of the boastful bird - ÒRÓFÓ!',
    submitted: 'Ileyoruba',
    narrated: 'Ileyoruba',
    translated: 'Ileyoruba',
    // audio: 'https://www.w3schools.com/html/horse.ogg',
    audio: '',
    references: ['https://ileyoruba.org', 'https://www.ileyoruba.org', 'www.ileyoruba.org'],
    content: () => { return <div>
      <p>
      Once upon a time, there was a colorful bird known as Òrófó who was very sad because she did not have a single child of her own, unlike the other birds.
      All the other birds, including Ega, Atiala or Atioro, Owiwi, Alapandede, Eyele, even the little Asisenren, had lots of children. 
      </p>
      Òrófó was worried. 

      <p style={{margin: "1rem 0"}}>
      Sometimes, she would lay many eggs, and none of them would hatch. 
      </p>
      <p style={{margin: "1rem 0"}}>
      At other times, as she pushed the eggs out of her womb, they would fall from her nest and break.
      </p>
      <p style={{margin: "1rem 0"}}>
      She narrated her ordeal to Eyele, her bossom friend for support on the way out. Eyele inquired whether she would be ready to consult a Babalawo, to which she consented.
      </p>
      <p style={{margin: "1rem 0"}}>

      Eyele took Òrófó to the Babalawo who consulted the Ifá oracle for her.
      </p>
      <p style={{margin: "1rem 0"}}>

      Ifa told Òrófó that she would have children,
      but she must make a sacrifice.
      </p>
      <p style={{margin: "1rem 0"}}>

      Òrófó swore that
      &ldquo;I would sacrifice anything that Ifá wants!
      I just want to fill my nest with my own children.
      For many years, my nest had been empty. I am already tired and depressed. I want children!
      What is the sacrifice? What does Ifá want, and I will sacrifice it now.&rdquo;

      </p>
      <p style={{margin: "1rem 0"}}>
      The Babalawo replied,
      &ldquo;Ifá does not want anything from you.
      Ifá just wants you to sacrifice silence.
      </p>
      <p style={{margin: "1rem 0"}}>

      You boast too much!

      </p>
      <p style={{margin: "1rem 0"}}>
      You will have children. But after having your children, keep quiet. Don’t go about boasting all over the place about them.&rdquo;
      </p>
      <p style={{margin: "1rem 0"}}>

      Òrófó promised to be silent and observe the sacrifice of silence.
      </p>
      <p style={{margin: "1rem 0"}}>

      Soon afterward, Òrófó became pregnant and hatched one egg. Her child was a pretty female bird, with a golden head.
      </p>
      <p style={{margin: "1rem 0"}}>

      Òrófó was happy but told nobody about it. She fed her child, named Temidire, with lots of bugs and Temidire, a playful child, began to grow healthy and strong.
      </p>
      <p style={{margin: "1rem 0"}}>

      Soon afterward, Òrófó became pregnant again and gave birth to another child. Òrófó was excited. She named her child, this time a male bird, Temilola.

      </p>
      <p style={{margin: "1rem 0"}}>
      Carefully, Orofo fed Temilola with bugs and corns, and lots of delicious fruits that she gathered from the neighborhood. 

      </p>
      <p style={{margin: "1rem 0"}}>
      Temilola had assorted brilliant feathers all over his body. He looked handsome and grew strong.
      </p>
      <p style={{margin: "1rem 0"}}>

      But Òrófó was now over excited for having two children that she could no longer contain herself.
      </p>
      <p style={{margin: "1rem 0"}}>

      She went about on top of the trees, announcing at the top of her voice,
      "Tèmilọlá, Tèmídire!
      Gbogbo ilé ti kún fọ́, fọ́, fọ́, fọ́, fọ́! 
      Tèmilọlá, Tèmídire! Gbogbo ilé ti kún fọ́, fọ́, fọ́, fọ́, fọ́!
      Tèmilọlá, Tèmídire! Gbogbo ilé ti kún fọ́, fọ́, fọ́, fọ́, fọ́!&rdquo; 
      </p>
      <p style={{margin: "1rem 0"}}>

      It means
      &ldquo;Tèmilọlá, Tèmídire!
      My entire nest is packed to the brim with a countless number of children.&rdquo;
      </p>
      <p style={{margin: "1rem 0"}}>
      All the birds heard Òrófó’s boasts and intoxications. They were albeit, happy for her. 
      </p>

      <p style={{margin: "1rem 0"}}>
      They congratulated her and visited her nest to give her gifts.
      </p>
      <p style={{margin: "1rem 0"}}>

      They were however, astonished and disappointed that Òrófó had only two children, yet she kept boasting that her nest was filled to the brim with uncountable children! What sort of madness has come over Òrófó? They queried!
      </p>
      <p style={{margin: "1rem 0"}}>

      But Òrófó did not stop boasting. 
      </p>
      <p style={{margin: "1rem 0"}}>

      Every minute of the day, she would be found on top of her tree, shouting,
      &ldquo;Tèmilọlá, Tèmídire! Gbogbo ilé ti kún fọ́, fọ́, fọ́, fọ́, fọ́!
      Tèmilọlá, Tèmídire! Gbogbo ilé ti kún fọ́, fọ́, fọ́, fọ́, fọ́! 
      Tèmilọlá, Tèmídire! Gbogbo ilé ti kún fọ́, fọ́, fọ́, fọ́, fọ́!&rdquo;
      </p>
      <p style={{margin: "1rem 0"}}>

      At other times she would fly from one tree to another, boasting,
      </p>
      <p style={{margin: "1rem 0"}}>
      &ldquo;Tèmilọlá, Tèmídire! Gbogbo ilé ti kún fọ́, fọ́, fọ́, fọ́, fọ́! 
      Tèmilọlá, Tèmídire! Gbogbo ilé ti kún fọ́, fọ́, fọ́, fọ́, fọ́! 
      Tèmilọlá, Tèmídire! Gbogbo ilé ti kún fọ́, fọ́, fọ́, fọ́, fọ́!&rdquo;
      </p>
      <p style={{margin: "1rem 0"}}>

      All the birds soon got tired of her boasts and never bothered about her.
      </p>
      <p style={{margin: "1rem 0"}}>

      One day, as Òrófó flew from tree to tree boasting about her fertility, a hunter’s son, named Ayo, heard her boast.
      </p>
      <p style={{margin: "1rem 0"}}>

      Ayo had just made a birdcage and was looking for birds to keep in his cage. 
      </p>
      <p style={{margin: "1rem 0"}}>

      Ayo waited for Òrófó to fly away from her tree to a distant tree to boast. 
      </p>
      <p style={{margin: "1rem 0"}}>

      Ayo quietly climbed up Orofo’s tree and found Orofo's two children sleeping.
      </p>
      <p style={{margin: "1rem 0"}}>

      Ayo collected the two young birds, placed them in his cage, and went away.
      </p>
      <p style={{margin: "1rem 0"}}>

      When Òrófó returned from her boasting campaign in the evening to feed her children, she found her nest empty.
      </p>
      <p style={{margin: "1rem 0"}}>

      She was distraught and bewildered, remembering the warning of the Babalawo!
      </p>
      <p style={{margin: "1rem 0"}}>
      
      This short story is the source of one of Yoruba proverbs.

      </p>
      <p style={{margin: "1rem 0"}}>
      From that day,
      Yoruba people evolved the saying:
      &ldquo;Ẹnu Òrófó ni ó ń pa Òrófó. Òrófó bímọ méjì, ó ní ilé òun ti kún fọ́, fọ́, fọ́, fọ́, fọ́.&rdquo;
      </p>
      <p style={{margin: "1rem 0"}}>
      It means
      &ldquo;Orofo’s boasting is her undoing. Orofo had only two children and boasted that her nest was overflowing with babies. Now she has come to square one!
      Let us draw appropriate lessons from Òrófó!
      </p>
      <p style={{margin: "1rem 0"}}>

      Enu wa kò ní pa wá lágbára Olodumare . Amin.
      </p>
      <p style={{margin: "1rem 0"}}>

      Ire tí a fi owó wá kó jo, a o ní fi enu wa dàánù! Àmín Àse Èdùmàrè
      </p>
  </div>},
  }
  
]
