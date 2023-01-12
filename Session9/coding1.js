const game = {
    team1: 'Argentina',
    team2: 'Pháp',
    players: [
    [
        'Martinez',
        'Molina',
        'Romero',
        'Otamendi',
        'Tagliafico',
        'Di Maria',
        'De Paul',
        'Fernandez',
        'Mac Allister',
        'Alvarez',
        'Messi',
    ],
    [
        'Lloris',
        'Kounde',
        'Varane',
        'Upamecano',
        'Theo Hernandez',
        'Tchouameni',
        'Rabiot',
        'Dembele',
        'Griezmann',
        'Mbappe',
        'Giroud'
    ],
    ],
    score: '3-0',
    scored: ['Alvarez','Messi','Fernandez','Mac Allister'],
    date: '23-11-2022',
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1.Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1,players2  );

// 2.Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers);

// 3.Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1 mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm và 'Thiago', 'Coutinho' và 'Perisic'
const players1Final = [...players1,'Dybala','Lautaro Martínez','Lisandro Martínez'];
console.log(players1Final);

// 5.Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là 'team1', 'draw' và 'team2')
const {odds: {team1, x: draw, team2},} = game;
console.log(team1, draw,team2)

// 6.Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
const printGoals = function(...players){
    console.log(players)
    console.log(`${players.length} bàn thắng được ghi`)
}
printGoals(...game.scored);

// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà không sử dụng if/else hoặc toán tử 3 ngôi.
team1 < team2 && console.log('Team 1 giành chiến thắng');
team1 > team2 && console.log('Team 2 giành chiến thắng');