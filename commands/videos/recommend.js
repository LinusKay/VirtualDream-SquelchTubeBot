const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('recommend')
		.setDescription('Recommends a SquelchTube video to watch!'),
	async execute(interaction) {
		const templates = [
			"I HIRED A {PRICE} INVESTIGATOR TO {VERB} {PERSON}",
			"I SQUELCHED {PERSON}????",
			"Introducing {Person} to the Squelch Community!",
			"Introducing {username} to the Squelch Community!",
			"Squelching {Person}",
			"SENDING {PERSON} INTO SPACE",
			"WHY {USERNAME} SHOULD BE BANNED",
			"{PRICE} SQUELCH BOX VS {PRICE} SQUELCH BOX",
			"THE ULTIMATE LIFE HACKS YOU NEED TO KNOW!!!",
			"HOW TO MAKE {PRICE} FAST AND EASY!!!",
			"I CHALLENGED {PERSON} TO A SQUELCH-OFF!!!",
			"EPIC PRANKS THAT WILL KILL YOUR MIND!!!",
			"YOU NEED TO WATCH THIS RIGHT NOW!!!"
		];

		const prices = [
			"$1000",
			"1,000,000",
			"$1",
			"$2.50",
			"$25",
			"$7000",
			"12BTC",
			"1BTC"
		];
		  
		const people = [
			"My Mom",
			"My Son",
			"My Neighbour",
			"The President",
			"KingSquelch",
			"My Dog",
			"My Cat",
			"My Teacher",
			"My Friend",
			"My Enemy",
			"My Lawyer",
			"My Boss",
			"A Fan"
		];

		const verbs = [
			"squelch",
			"squelch",
			"squelch",
			"fight",
			"kill",
			"love",
			"destroy",
			"conquer",
			"investigate",
			"crush",
			"defeat",
			"uncover",
			"expose",
			"discover",
			"challenge",
			"capture",
			"tackle",
			"rescue",
			"save",
			"escape",
			"survive",
			"transform",
			"create",
			"build",
			"explode",
			"merge",
			"vanish",
			"haunt",
			"bewitch",
			"enchant",
			"curse",
			"free",
			"betray",
			"befriend",
			"chase",
			"teach",
			"learn",
			"inspire",
			"invent",
			"assemble",
			"construct",
			"manufacture",
			"manipulate",
			"devise",
			"execute"
		]

		const publicReactions = [
			"Joyous",
			"Acceptable",
			"Unfavourable",
			"Irreconcilable"
		]

		const giveaways = [
			"+ GIVEAWAY",
			"+ $1000 GIVE AWAY",
			"+ $10,000 CASH PRIZE",
			"+ FREE GIFT",
			"+ LIMITED TIME OFFER",
			"+ WIN BIG",
			"+ ENTER TO WIN",
			"+ PRIZE DRAW",
			"+ EXCLUSIVE REWARD",
			"+ CHANCE TO WIN",
			"+ BONUS CONTENT",
			"+ SURPRISE GIFT",
			"+ SPECIAL GIVEAWAY",
			"+ HUGE REWARD",
			"+ SECRET PRIZE",
			"+ AMAZING PRIZE PACKAGE",
			"+ LUXURY GIVEAWAY",
			"+ GRAND PRIZE",
			"+ EPIC GIVEAWAY"
		]
		
		const userNames = [
			"SquelchGod",
			"KingSquelch",
			"MrEpicStyle - Cool Video",
			"Squelch Or Die",
			"SquelchTech",
			"{name}{number}"
		]

		const names = [
			"emma",
			"liam",
			"olivia",
			"noah",
			"ava",
			"william",
			"sophia",
			"james",
			"isabella",
			"oliver",
			"charlotte",
			"benjamin",
			"amelia",
			"elijah",
			"mia",
			"lucas",
			"harper",
			"mason",
			"evelyn",
			"logan",
			"abigail",
			"alexander",
			"emily",
			"ethan",
			"ella"
		  ];

		const shuffledPrices = shuffleArray([...prices]);
		const shuffledPeople = shuffleArray([...people]);
		const shuffledVerbs = shuffleArray([...verbs]);
		const shuffledGiveaways = shuffleArray([...giveaways]);
		const shuffledNames = shuffleArray([...names]);
		const shuffledUserNames = shuffleArray([...userNames]);

		// Function to shuffle an array (Fisher-Yates shuffle algorithm)
		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		function generateRandomuser() {
			let index = 0;
			let userName = shuffledUserNames[index];
			const filteredUsername = userName.replace(/{name}/g, () => shuffledNames[index++])
											 .replace(/{number}/g, () => Math.floor(Math.random() * 100));
			return filteredUsername;
		}
		
		function generateRandomTitle() {
			let template = templates[Math.floor(Math.random() * templates.length)];

			const addonChance = Math.random();
			if(addonChance < 0.4) {
				template += " {GIVEAWAY}";
			}
			
			let index = 0;
			const filteredTitle = template.replace(/{(price|Price)}/, () => shuffledPrices[index++])
											.replace(/{PRICE}/g, () => shuffledPrices[index++].toUpperCase())
											.replace(/{(person|Person)}/g, () => shuffledPeople[index++])
											.replace(/{PERSON}/g, () => shuffledPeople[index++].toUpperCase())
											.replace(/{(verb|Verb)}/g, () => shuffledVerbs[index++])
											.replace(/{VERB}/g, () => shuffledVerbs[index++].toUpperCase())
											.replace(/{GIVEAWAY}/g, () => shuffledGiveaways[index++])
											.replace(/{username}/g, () => generateRandomuser())
											.replace(/{USERNAME}/g, () => generateRandomuser().toUpperCase())
			
			return filteredTitle;
		}

		const secondsToTimestamp = (seconds) => {
			const timestamp = new Date(seconds * 1000).toISOString().slice(11, 19);
			return timestamp.startsWith('00:') ? timestamp.slice(3) : timestamp;
		};

		const videoAuthor = generateRandomuser();
		const videoPublicReaction = publicReactions[Math.floor(Math.random() * publicReactions.length)]
		const videoViews = Math.floor(Math.random() * 5000000).toLocaleString().toString();

		const totalThumbs = 22;
		const thumbNumber = Math.floor(Math.random() * totalThumbs) + 1;

		const videoLengthMax = 3000;
		const videoLengthSeconds = Math.floor(Math.random() * videoLengthMax) + 1;
		const videoLength = secondsToTimestamp(videoLengthSeconds);

		const videoEmbed = new EmbedBuilder()
			.setColor('#AB38FF')
			.setAuthor({ name: videoAuthor, url: 'https://squelchtv.virtualdream.live' })
			.setTitle(generateRandomTitle())
			.setURL('https://squelchtv.virtualdream.live')
			.setThumbnail(`https://squelchtv.virtualdream.live/src/img/thumb/thumb${thumbNumber}_small.jpg`)
			.addFields(
				{ name: 'Views', value: videoViews, inline: true},
				{ name: 'Length', value: videoLength, inline: true},
				{ name: 'Public Reaction', value: videoPublicReaction, inline: true}
			)
			.setFooter({ text: 'All videos legal property of SquelchTV Pty Ltd. Available only on Virtual Dream.' });

		const replyMessage = await interaction.reply({ embeds: [videoEmbed], fetchReply: true  });
		replyMessage.react('👍');
		replyMessage.react('👎');
	},
};