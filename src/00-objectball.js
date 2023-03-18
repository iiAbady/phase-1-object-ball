function gameObject() {
	return {
		home: {
			teamName: "Brooklyn Nets",
			colors: ["Black", "White"],
			players: {
				"Alan Anderson": {
					number: 0,
					shoe: 16,
					points: 22,
					rebounds: 12,
					assits: 12,
					steals: 3,
					blocks:1,
					slamDunks: 1
				},
				"Reggie Evans": {
					number: 30,
					shoe: 14,
					points: 12,
					rebounds: 12,
					assits: 12,
					steals: 12,
					blocks: 12,
					slamDunks: 7
				},
				"Brook Lopez": {
					number: 11,
					shoe: 17,
					points: 17,
					rebounds: 19,
					assists: 10,
					steals: 3,
					blocks: 1,
					slamDunks: 15
				},
				"Mason Plumlee": {
					number: 1,
					shoe: 19,
					points: 26,
					rebounds: 12,
					assists: 6,
					steals: 3,
					blocks: 8,
					slamDunks: 5
				},
				"Jason Terry": {
					number: 31,
					shoe: 15,
					points: 19,
					rebounds: 2,
					assists: 2,
					steals: 4,
					blocks: 11,
					slamDunks: 1
				}
			}
		}, 
		away: {
			teamName: "Charlotte Hornets",
			colors: ["Turquoise", "Purple"],
			players: {
				"Jeff Adrien": {
					number: 4,
					shoe: 18,
					points: 10,
					rebound: 1,
					assists: 1,
					steals: 2,
					blocks: 7,
					slamDunks: 2
				},
				"Bismak Biyombo": {
					number: 0,
					shoe: 16,
					points: 12,
					rebounds: 4,
					assists: 7,
					steals: 7,
					blocks: 15,
					slamDunks: 10
				},
				"DeSagna Diop": {
					number: 2,
					shoe: 14,
					points: 24,
					rebound: 12,
					assists: 12,
					steals: 4,
					blocks: 5,
					slamDunks: 5
				},
				"Ben Gordon": {
					number: 8,
					shoe: 15,
					points: 33,
					rebounds: 3,
					assists: 2,
					steals: 1,
					blocks: 1,
					slamDunks: 0
				},
				"Brendan Haywood": {
					number: 33,
					shoe: 15,
					points: 6,
					rebounds: 12,
					assists: 12,
					steals: 22,
					blocks: 5,
					slamDunks: 12
				}
			}
		}
	}
}

function numPointsScored(playerName) {
	const game = gameObject();
	for (const team in game) {
		const player = Object.keys(game[team]["players"]).find(_player => _player == playerName);
		if (player) {
			return game[team]["players"][player]["points"]
		}
	}
}

function shoeSize(playerName) {
	const game = gameObject();
	for (const team in game) {
		const player = Object.keys(game[team]["players"]).find(_player => _player == playerName);
		return game[team]["players"][player]['shoe']
	}
}

function teamColors(teamName) {
	const game = gameObject();
	for (const _team in game) {
		const team = game[_team]
		const matchedTeam = team['teamName'] == teamName;
		if (matchedTeam) {
			return team['colors'];
		}
	}
}

function teamNames() {
	const game = gameObject();
	const teams = [];
	for (const team in game) {
		teams.push(game[team]['teamName'])
	}
	return teams;
}

function playerNumbers(teamName) {
	const game = gameObject();
	for (const team in game) {
		const matchedTeam = game[team]["teamName"] == teamName;
		if (matchedTeam){
		return playersNo = Object.keys(game[team]["players"]).map(player => {
			return game[team]["players"][player]["number"]
		});
		}
	}
}

function playerStats(playerName) {
	const game = gameObject();
	for (const team in game) {
		const player = Object.keys(game[team]["players"]).find(_player => _player == playerName);
		if (player) {
			return game[team]["players"][player];
		}
	}
}

function bigShoeRebounds() {
	const game = gameObject();
	let biggestShoeSize = { size: 0, playerName: "" };
	for (const team in game) {
		const players = game[team]["players"];
		Object.keys(players).forEach((_player) => {
		if(players[_player].shoe > biggestShoeSize.size) {
			biggestShoeSize.size = players[_player].shoe;
			biggestShoeSize.playerName = _player;
		}
		})
	}
	return biggestShoeSize.playerName;
}


function mostPointsScored() {
	const game = gameObject();
	let mostPoints = { points: 0, playerName: "" };
	for (const team in game) {
		const players = game[team]["players"];
		Object.keys(players).forEach((_player) => {
		if(players[_player].points > mostPoints.points) {
			mostPoints.points = players[_player].points;
			mostPoints.playerName = _player;
		}
		})
	}
	return biggestShoeSize.playerName;
}

function winningTeam() {
	const game = gameObject();
	const teams = Object.keys(game);
	let winningTeam = game[teams[0]];
	let {points} = Object.values(winningTeam.players).reduce((acc, curr) => {
		return {points: acc.points + curr.points};
	});
	for (let i = 1; i < teams.length; i++) {
		const teamPoints = Object.values(game[teams[i]].players).reduce((acc, curr) => {
		return {points: acc.points + curr.points};
		}).points;
		if (teamPoints > points) {winningTeam = game[teams[i]];
		points = teamPoints;
		}
	}
	return winningTeam;
}


function playerWithLongestName() {
	const game = gameObject();
	let biggestName = '';
	let biggestNameLength = 0;
	const teams = Object.values(game);
	for (let i = 0; i < teams.length; i++) {
		const players = Object.keys(teams[i].players);
		players.forEach(player => {
			if(player.length > biggestNameLength) {
				biggestName = player;
				biggestNameLength = player.length;
			}
		})
	}
	return biggestName;
}

function doesLongNameStealATon() {
	const game = gameObject();
	const longestPlayerName = playerWithLongestName()
	const teams = Object.values(game);
	let maxStealsPlayer;
	let maxSteals = 0;
	for (const team of teams) {
		const playerNames = Object.keys(team.players);
		const players = Object.values(team.players);
		players.forEach((player, i) => {
			if(player.steals > maxSteals) {
				maxStealsPlayer = playerNames[i];
				maxSteals = player.steals;
			}
		})
	}
	console.log(maxSteals)
	console.log(maxStealsPlayer);
	return longestPlayerName === maxStealsPlayer;
}

console.log(doesLongNameStealATon());