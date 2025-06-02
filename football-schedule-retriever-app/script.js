document.getElementById('searchButton').addEventListener('click', function() {
    const teamName = document.getElementById('teamName').value;
    const scheduleResultDiv = document.getElementById('scheduleResult');

    // Clear previous results
    scheduleResultDiv.innerHTML = '';

    // For now, we will use mock data if the team is "Real Madrid" or if no team is entered (for demonstration)
    // In a real application, you would fetch data based on the 'teamName' variable.
    if (teamName.toLowerCase() === 'real madrid' || teamName === '') {
        const mockData = [
            {
                opponent: 'FC Barcelona',
                date: '2024-08-15',
                time: '20:00 CET',
                location: 'Santiago Bernabéu, Madrid',
                ticketLinks: [
                    { name: 'Official Tickets', url: '#' },
                    { name: 'Viagogo', url: '#' },
                    { name: 'StubHub', url: '#' }
                ]
            },
            {
                opponent: 'Atletico Madrid',
                date: '2024-09-01',
                time: '18:00 CET',
                location: 'Wanda Metropolitano, Madrid',
                ticketLinks: [
                    { name: 'Official Tickets', url: '#' },
                    { name: 'SeatGeek', url: '#' }
                ]
            },
            {
                opponent: 'Sevilla FC',
                date: '2024-09-22',
                time: '21:00 CET',
                location: 'Ramón Sánchez Pizjuán, Seville',
                ticketLinks: [
                    { name: 'Official Tickets', url: '#' }
                ]
            }
        ];

        if (mockData.length === 0) {
            scheduleResultDiv.innerHTML = '<p>No upcoming games found for Real Madrid.</p>';
            return;
        }

        mockData.forEach(game => {
            const gameEntryDiv = document.createElement('div');
            gameEntryDiv.className = 'game-entry';

            const opponentHeader = document.createElement('h3');
            opponentHeader.textContent = `Real Madrid vs ${game.opponent}`;
            gameEntryDiv.appendChild(opponentHeader);

            const gameDateTime = document.createElement('p');
            gameDateTime.textContent = `Date: ${game.date} at ${game.time}`;
            gameEntryDiv.appendChild(gameDateTime);

            const gameLocation = document.createElement('p');
            gameLocation.textContent = `Location: ${game.location}`;
            gameEntryDiv.appendChild(gameLocation);

            const ticketsParagraph = document.createElement('p');
            ticketsParagraph.textContent = 'Tickets: ';
            game.ticketLinks.forEach((link, index) => {
                const ticketLink = document.createElement('a');
                ticketLink.href = link.url;
                ticketLink.textContent = link.name;
                ticketLink.target = '_blank'; // Open in new tab
                ticketsParagraph.appendChild(ticketLink);
                if (index < game.ticketLinks.length - 1) {
                    ticketsParagraph.append(' | ');
                }
            });
            gameEntryDiv.appendChild(ticketsParagraph);

            scheduleResultDiv.appendChild(gameEntryDiv);
        });

    } else {
        scheduleResultDiv.innerHTML = `<p>Sorry, mock data is only available for 'Real Madrid'. You entered: ${teamName}</p>`;
    }
});
