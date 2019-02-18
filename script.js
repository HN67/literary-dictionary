// JavaScript Document

"esversion: 6";

// Links between letters and the word
var words = {"A": "Archetype",
		     "B": "Bathos",
		     "C": "Cadence",
	     	 "D": "Doppelganger",
			 "E": "Epiphany",
			 "F": "Flashback",
			 "G": "Gemel",
			 "H": "Hubris",
			 "I": "Idiom",
			 "J": "Jargon",
			 "K": "Kenning",
			 "L": "Lament",
			 "M": "Metonymy",
			 "N": "Nemesis",
			 "O": "Omnipotent",
			 "P": "Portmanteau",
			 "Q": "Quadrivium",
			 "R": "Red Herring",
			 "S": "Straw Man",
			 "T": "Tautology",
			 "U": "Undertone",
			 "V": "Verisimilitude",
			 "W": "Weltanschauung",
			 "X": "Xenia",
			 "Y": "Yarn",
			 "Z": "Zeugma",

			};

// Definition of each letter (word)
var definitions = {"A": `
						 
						An Archetype is a classic example or model which other things are based on. 
						It refers to the recurring traits that make up the foundation to a character, 
						setting or symbol, typically within fiction. In simpler terms, an Archetype 
						correlates with the stereotypical commonality of a larger topic; 
						acting almost as an umbrella for other ideas or terms.						 
				   		`,
				   "B": `Bathos is an amusing failure to achieve a certain mood in literature, often 
						through the form of an anticlimax, where the tone abruptly shifts from serious/important 
						to common/absurd or some other lighter mood. Bathos can be unintentional 
						(because of poor writing) or intentional (used for comedic effect).`,
				   "C": `Cadence is the rising and falling of a readers vocal pitch when reading 
						literature. It’s prevalence is demonstrated primarily through reciting poems. 
						In poetry, it is the momentary changes in rhythm and pitch. The importance of 
						cadence allows readers to draw emotion and set a rhythmic pace within a segment
						of literature. `,
				   "D": `A doppelganger is a non-biologically related look-alike of a person’s exterior 
						   appearance. Doppelganger’s can be portrayed as a ghost-like or paranormal 
						   phenomenon typically seen as an omen of bad luck. 
 				   		`,
				   "E": `An epiphany is the moment and feeling of a sudden (and usually significant) realization, when an individual makes a leap in their understanding. Epiphanies are often a critical part of innovation, and are usually triggered by a new piece of information combined with a background of knowledge. Some people believe that epiphanies are supernatural/spiritual in nature, where the sudden understanding is given from an external, supernatural force.
					   `,
				   "F": `In literature, a flashback is when a scene is added that takes the narrative back in time. Typically, flashbacks are used to fill in character or other backstory in a detailed way, but flashbacks can also be used as a frame story (i.e. the entire literature piece is a character recounting his events). Flashbacks are also used in dramatic works with two time periods interweaving throughout the book until typically they combine at the end. The opposite of a flashback is a flashforward, where the literature temporarily jumps forward in time.
					   `,
				   "G": `A gemel is specifically the couplet that appears at the end of a sonnet, where a couplet is a pair of lines with the same meter that rhyme.`,
				   "H": `Hubris is an over exaggerated sense of self-pride or confidence. It is not necessarily the same as having an increased amount of pride, rather, describing or believing the accomplishment to be of high value. The perception of having a sense of hubris is completely subjective, as two people may believe an accomplishment to be of different levels. 
					   `,
				   "I": `An idiom is a group of words that have no correlation to the context of which it is being used. Most idioms can be seen as metaphors in disguise due to their realism being little to none.`,
				   "J": `Jargon is language specific to a certain group of people that may not be understood well by others. Jargon is typically used in an occupational context, e.g. a profession or academic field, but any group can develop their own jargon. Jargon is distinguished from general language by special vocabulary, either through entirely new words or words with different contextual meaning than normal. Most jargon exists in a technical context within an industry, growing from the need for highly specific and accurate communication within a sector. Jargon can also be used to exclude outsiders from a group, and can be used to show intellectual superiority.
					   `,
				   "K": `A kenning is when a group of words are used to imply a metaphorical meaning instead of a single concrete word. A kenning is usually a pair of words, and is most strongly associated with  Old Norse and Old English poetry. Kennings can also used to deal with gaps in a language, especially when translating from another language. Kennings are usually used for poetic effect.
					   `,
				   "L": `A lament, or lamentation is a highly passionate expression of grief in literature, usually music, poetry, or a song. The grief usually comes from strong regret or mourning. Laments, when expressed verbally, are also often expressed with physical grief, e.g. wailing or crying. Laments are some of the oldest known examples of literature from human history. Historically, laments are often performed by women, often after the loss of spouses or children, but can be performed by anyone. 
					   `,
				   "M": `Metonymy is a figure of speech where something is referred to by the name of something else that is closely related. Metonymy is distinct from metaphor by that whereas metaphor takes the qualities of one object and places it on another, metonymy simply suggests another object by the use of one through common association. A common form of metonymy is synecdoche, where the object used to refer to another is a part of the greater whole.
					   `,
				   "N": ``,
				   "O": `An omnipotent being is one who is literally able to do anything. Omnipotence is typically referred to as god. Omniscience in literature, is text that is written in third-person from an all-knowing narrator. This narrator knows the thoughts, beliefs and decisions of every character in the story. 
					   `,
				   "P": `Portmanteau is a literary device in which two or more words are combined to form a new word with similar meaning. The mixing of the two words typically involve the initial letters of the first word, and closing letters of the second. The process is used to describe ideas that are not easily describable in the English language. 
					   `,
				   "Q": ``,
				   "R": `A red herring is something that by seeming to be important distracts an audience from what is truly important, while the herring itself is actually unimportant. As a literary device, red herrings are most common in mystery fiction, where the protagonist and/or reader are given a false trail away from the real solution to the mystery. 
					   `,
				   "S": `A straw man is an illogical fallacy where an arguer will take their opponent’s argument and replace it with one that is easier to refute, giving the impression of refuting their opponent’s argument while actually refuting a much weaker position. A common form of a straw man argument is the slippery slope argument, where the person argues against a proposition based on an exaggerated version that it could become, instead of arguing the actual proposition.
					   `,
				   "T": `Tautology is essentially stating the same thing twice in different words. It can be viewed as unnecessary repetition of an idea, statement or word in the eyes of some writers.  
					   `,
				   "U": `Undertone is an implied meaning towards the underlying theme of work. It is used for writers to convey greater meaning through the use of symbol or images rather than expressing their ideas through a direct attitude or theme. This makes it difficult for readers to identify the author’s true undertone.
					   `,
				   "V": `Verisimilitude is typically the extent to which a literary text is believable, or to which it resembles life. It follows the ideology of which the reader is willing to abandon any non-fictional aspects to a story in order for the author’s imagination to be aligned with the readers. Regardless of how non-fictional a story is, most authors typically wish their stories to have verisimilitude in order for the readers thoughts to correlate with the authors’.
					   `,
				   "W": `Weltanschauung is the philosophy of an individual, artist or like-minded collective. It targets the philosophy concerning one’s connection to civilization. The German word Weltanschauung literally means “world view”. 
					   `,
				   "X": `Xenia is the Greek term for “Laws of Hospitality”. The custom in classical Greece was that if a traveler happened to come across a foreign town, they should be able to ask for food, shelter and gifts to assist them on their journey. The host is typically considered to be responsible for their guest’s comfort and safety. Breaching these hospitality laws was thought to anger Zeus (the king of gods).
					   `,
				   "Y": `Yarn is an adventurous story about one’s travels, journey’s etc, typically made more appealing by discussing/adding things that did not happen. 
					   `,
				   "Z": `Zeugma is a literary term for using a single word to modify two other words, in two different ways. It is typically used for writers to convey more meaning through less words.
					   `,
				  };

// Examples of each word
var examples = {"A": `
					  Examples of a character Archetype include: the wandering hero, noble knight, the warrior etc. Each of these examples hold specific attributes to describe their satirical cliche. For instance, the character embodiment of a noble knight within fiction would typically be courageous, powerful, egotistic etc. similar to Hercules.<br><br> 
					  Examples of a setting Archetype include: garden, forest, wasteland etc. The setting of a wasteland in particular symbolizes a place for cleansing and seeking inner fulfillment, similar to the 2008 film taken place in a barren wasteland, Wall-E.<br><br> 
					  Examples of an symbolic Archetype include: Light, Dark, Ice, Fire, etc. The contrast between Light and Dark represents the perception of Good vs Evil, Protagonist vs Antagonist, or even Hope vs Despair. 
						
					  `,
				"B": `A traditional example of the use of Bathos is the end of Enoch Arden, which ends with the lines: 
						<br><br>So past the strong heroic soul away.
						<br>And when they buried him the little port
						<br>Had seldom seen a costlier funeral.<br><br>
					  which is a sudden transition from a heroic tone to an abrupt realistic/cynical one. Another example is the one liner “The ballerina rose gracefully en pointe and extended one slender leg behind her, like a dog at a fire hydrant.” which is from a humour column in the Washington Post.
					`,
				"C": `Most examples of cadence in literature fall under two primary types. Imperfect and perfect cadence. Imperfect cadence in poetry is shown through a comma or a semicolon to signify closure or expansion to a thought. Perfect cadence, however, comes at the end of a phrase within a poem.
						<br><br>
						For instance, in the poem “Painting of a Bedroom with Cats” by Elizabeth Bartlett:
						<em>
						<br>“The curved cane chair has dented cushions, the cats
						<br>Catch spiders and craneflies on the wardrobe tops,
						<br>The guitar lies in its funeral case, the road is quiet,
						<br>The apple trees have dropped their fruit in the grass;
						<br>
						<br>Rain is coming in from the west; the garden is lush and damp,
						<br>The draught is over, and the day is at the eleventh hour,
						<br>Sleep is nearly here on fern-patterned pillowcases,
						<br>Books slither to the floor, cats is stretched on the quit…”
						</em>
						<br>The third line within the first stanza and the fourth line in the second stanza includes a comma to indicate a pause in the poem. It also gives momentary variation to the rhythm of the poem. 
				`,
				"D": `An example in literature of a doppelganger is found in Shakespeare’s Macbeth. During the rising action of the story, Macbeth goes to kill Banquo in order to fulfill the witches prophecy and take the title of King for himself. Soon after Banquo’s murder, Macbeth began seeing visions of Banquo in the form of a ghost causing him to feel regret for his actions. This form of Banquo as a ghost is considered a doppelganger of Banquo as they are not the same person. `,
				"E": `Two of the most popular examples of epiphanies are Archimedes discovery of how to measure volume of irregular objects (the Eureka! Moment in the bath), and Isaac Newtons realization that all objects are pulled towards each other. 
					`,
				"F": `A classical example of where a flashback is used as a frame story is the Odyssey, where the story is Odysseus describing his adventures to a listener.
					 <br><br>A popular use of extensive flashbacks are in natural disaster or other catastrophe story, where each characters previously lives are slowly revealed in flashbacks throughout the novel. Mystery novels will also often flashback to the scene of the crime in the last act to reveal the culprit.
				`,
				"G": `Examples of Gemels can be pulled from any sonnet, such as Shakespeare’s Sonnet 18, which ends with 
					  <ul><li>So long as men can breathe, or eyes can see,</li><li>So long lives this, and this gives life to thee.</li></ul>`,
				"H": `Heroes and villains can both display a sense of hubris. In classical definitions, hubris specifically refers to the defiance of the gods and maintaining divine order. The most famous example of hubris is during Greek times when Meidias struck Demosthenes in the face when the latter was dressed in ceremonial robes, conducting an official function. 
					`,
				"I": `The most famous example of an idiom is “raining cats and dogs”. It is clearly not physically plausible to rain cats and dogs, however, the phrase is used as a metaphorical expression to convey heavy rain. Some other common everyday examples of idioms are: A blessing in disguise, beat around the bush and better late than never. WIth the phrase “beat around the bush” there is an aforementioned metaphor involved. A person is not directly beating around the bush, however, the phrase implies hesitance or uncomfort for what one is trying to say.
					`,
				"J": `Common examples of areas where Jargon is used include science jargon, computer jargon, and sports jargon. In science there is often specific jargon used to describe various actions, such as types of reactions in chemistry, cell processes in biology, and force names in physics. Computer jargon is very common due to the fast pace at which technology is improving, constantly requiring new terminology to describe the technology, such as addressed, caching, motherboards, etc. Sports have large amounts of jargon that are highly dependent on the specific sport to describe various events and actions of significance that can occur during a game. 
					`,
				"K": `Examples of kenning can most easily be found from Old Norse poetry. One such example is using “wave-horse” or “oar-steed” in place of the noun “boat” or “ship”, as a ship could be thought of as a horse (through its transportation capabilities), but on water. Another example is “wound-hoe” which takes the farming implement of a hoe (a tool) and turns it into something that wounds, i.e. a sword.
					`,
				"L": `Examples of laments can be found in many historical texts, due to the strength of negative emotion. Laments are present in the Iliad, Odyssey, Beowulf, Bible, and many other pieces of literature. A specific example can be found in the Iliad, where Andromache laments the death of her husband, Hector. 
					`,
				"M": `A common example of metonymy is using “hands” to refer to workers in general, and this is also a synecdoche, as part of the worker (the hand) is used to refer to the worker as a whole. Another example of metonymy is calling the monarchy “the Crown” where a crown is closely related to monarchy, therefore being capable of being used to directly represent the monarchy. When “The White House” is used to represent the executive branch of government, it is a metonymy, but if it is used to represent the government as a whole it is also a synecdoche. 
					`,
				"N": ``,
				"O": `An example of omnipotence is a third person narrator within a literature. This can be portrayed through a story, image, or even a quote. For instance, Albert Einstein once said: "A person who never made a mistake never tried anything new." The quote is spoken from an outside perspective as Einstein speaking his beliefs on human behaviour in general.
					`,
				"P": ``,
				"Q": ``,
				"R": `An example of red herring is from one of Agatha Christie’s mystery novels And Then There Were None, where 10 isolated people are slowly killed off one at a time. When there are 4 left and one suddenly goes missing, the remaining three assume that they must have been the killer, until they later find the fourth person dead, revealing it to be a red herring.
					  <br><br>
					  Another example is in the Sherlock Holmes novel The Final Problem, where Watson receives an urgent call to return to the hotel to treat to an injured woman, but upon arrival discovers there was no woman and it was a ploy to separate Watson and Holmes.
					`,
				"S": `An example of a straw man refutation would be as following: Speaker A advocates for relaxed laws on beer, and Speaker B refutes with the argument that any society with unrestricted access to intoxicants loses its moral and work ethic. The strawman here is that Speaker A advocated for relaxation (not removal) of laws on beer specifically, not all intoxicants, while Speaker B grossly exaggerated the argument to create an easier target.
					`,
				"T": `An example of tautological statement is: “A beginner who has just started”. The words “beginner” and “started” both indicate similar ideas. It is morealess stating the obvious by describing the beginner to be a person who has “just started”. 
					`,
				"U": `The use of Undertone is found in literature everywhere. A few popular examples include: Cherry Orchard, The Lord of the Rings, and Hamlet. The undertone in Lord of the Rings for instance, is primarily Catholic and Christian truths. A popular example being the protagonists in the novel pursuing absolutes, rejecting the will to compromise or relativize. Readers do not see moral clues of relativism to separate races, people etc. The protagonists also believe it is essential to suffer and sacrifice freedom from the tyranny of evil.
					`,
				"V": `Popular examples of verisimilitude comes from many works of Mark Twain. He makes his characters use the dialect similar to the American South. For instance, in one of his story’s, Huck Finn creates a speech to make his character more believable through the following: 
					  <br><br>
					  <em>
					  I didn't want to go back no more. I had stopped cussing, because the widow didn't like it; but now I took to it again because pap hadn't no objections... But by-and-by pap got too handy with his hick'ry, and I could't stand it. I was all over with welts. He got to going away so much, too, and locking me in. Once he locked me in and was gone three days. It was dreadful lonesome.
					  </em>
					  <br><br>
					  The character’s dialect being from a non-traditional form of English brings out a sense of uniqueness and realism to the text for the story to have more verisimilitude.
					  `,
				"W": `An example of Weltanschauung dates back to the early First Nation’s folk of Canada. The spiritual connection they had with their land describes the meaning of Weltanschauung.
					`,
				"X": ``,
				"Y": `An example of Yarn could go as follows: Person A is talking to Person B about his journey to Dubai. Person A talks about an engine failure causing the plane to hurl towards the ground. The plane engineers ended up fixing the damage to allow the passengers to fly safely for the remainder of the flight. In reality, however, the “engine failure” could have just been slight turbulence. 
					`,
				"Z": `An example of Zeugma being used in a sentence goes as following: She broke his car and his heart. A reader could take plenty away from this sentence, however, it is most evident that a female broke another man’s car (literally) and his heart (figuratively). The use of Zeugma shows the feelings of both members of the relationship in this situation.The first couple words indicates the female’s anger or distress as she felt the need to damage her ex-boyfriend’s car. The second half of the phrase indicates the feelings of the male as we are now aware he is feeling melancholy. 
					`,
				
				
			   };

// Function to update display    
function showInfo(letter) {
	
	"use strict";
	
	document.getElementById("wordTitle").textContent = words[letter];
	document.getElementById("definition").innerHTML = definitions[letter];
	document.getElementById("examples").innerHTML = examples[letter];
	document.getElementById("image").src = "images/"+letter+".png";
	document.getElementById("image").alt = "Graphic accompanying "+words[letter]+" definition";
	
}