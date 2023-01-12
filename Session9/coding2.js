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

// 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví dụ: "Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries()) {
    console.log(`Ghi bàn thứ ${i + 1}: ${player}`);
}

// 2.  Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không nhớ)
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3. 
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'Tỉ số hòa là' : `Tỉ lệ thắng của ${game[team]} là`;
    console.log(`${teamStr} ${odd}`);
}