document.getElementById("divideBtn").addEventListener("click", function () {
  const input = document.getElementById("input").value;
  const names = input
    .trim()
    .split("\n")
    .filter((name) => name.trim() !== "");


  console.log(names);
  if (names.length < 2) {
    alert("Por favor ingrese al menos 2 nombres.");
    return;
  }

  const nuevoNames = names.sort(() => Math.random() - 0.5); // Mezclar los nombres aleatoriamente

  console.log(nuevoNames);

  const numTeams = 2; // Cambia esto si deseas un número diferente de equipos
  const teamSize = Math.ceil(names.length / numTeams);
  const teams = [];

  for (let i = 0; i < numTeams; i++) {
    teams.push(names.slice(i * teamSize, (i + 1) * teamSize));
  }

  const teamOutput = document.getElementById("teamOutput");
  teamOutput.innerHTML = teams
    .map(
      (team, index) => `
        <h2>Equipo ${index + 1}:</h2>
        <ul>${team.map((name) => `<li>${name}</li>`).join("")}</ul>
    `
    )
    .join("");
});