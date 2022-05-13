// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

//Definisco array popolato da oggetti, ogni oggetto definisce un membro del team.
const members = [
    {
        memberName: "Wayne Barnett",
        role: "Founder & CEO",
        memberPic: src = "../img/wayne-barnett-founder-ceo.jpg",
    },
    {
        memberName: "Angela Caroll",
        role: "Chief Editor",
        memberPic: src = "../img/angela-caroll-chief-editor.jpg"
    },
    {
        memberName: "Walter Gordon",
        role: "Office Manager",
        memberPic: src = "../img/walter-gordon-office-manager.jpg",
    },
    {
        memberName: "Angela Lopez",
        role: "Social Media Manager",
        memberPic: src = "../img/angela-lopez-social-media-manager.jpg",
    },
    {
        memberName: "Scott Estrada",
        role: "Developer",
        memberPic: src = "../img/scott-estrada-developer.jpg",
    },
    {
        memberName: "Barbara Ramos",
        role: "Graphic Designer",
        memberPic: src = "../img/barbara-ramos-graphic-designer.jpg",
    },
];
//Creo variabile per elemento del DOM in cui stamperò le informazioni
const mainContainer = document.querySelector(".team-container");
//Eseguo ciclo per la lunghezza dell'array dove i = oggetto
for( let i = 0; i < members.length; i++ ) {
    console.log(members[i]);
    //Creo variabile a cui assegno il markup HTML inserendo le info ottenute ciclando l'array, quindi gli oggetti.
    const member = 
        `<div class="team-card">
            <div class="card-image">
                <img
                    src="${members[i].memberPic}"
                    alt="Wayne Barnett"
                />
            </div>
            <div class="card-text">
                <h3>${members[i].memberName}</h3>
                <p>${members[i].role}</p>
            </div>
        </div>`;
    console.log(members);
    //Stampo nel DOM, ad ogni ciclo, l'elemento presente più il nuovo.
    mainContainer.innerHTML += member;
}
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
