
/*
//entrainement fonction .data pour stocker des données dans le html
$('article:eq(1)').data("test", "Chaîne de caractère test");
$('article:eq(1)').data("essai", {nom: "objet test", prop: "propriété"});
$('article:eq(1)').data("tableau", ["tableau", "test", 23, [0, 12, 1]]);

// lignes à tester dans la console
$('article:eq(1)').data();
$('article:eq(1)').data().test;
$('article:eq(1)').data("essai");
$('article:eq(1)').data("tableau");

*/

///////////////////////////////////////////////////////////////////////////////

/*
//test  de la fonction . load qui modifie les articles du main HTML par ceux des nouveaux articles html
$('.articleContainer').load('nouveauxArticles.html');
*/

///////////////////////////////////////////////////////////////////////////////

/*
// exemple pour réagir en cas d'erreur,  avec implémentation d'une fonction callback avec la réaction désirée face à l'erreur
$('.articleContainer')
.load (
    'pageInconnue.html',
    function (reponse, statut, objetAjax)
    {
        if (statut == 'error')
        {
            console.log('Une erreur est survenue : ' + objetAjax.status + ' -> ' + objetAjax.statusText);
        }
    }
);
*/

///////////////////////////////////////////////////////////////////////////////


/*
//essai ajout foonction à bibliothèque jQuery fn.extend

$.fn.extend (
    {
        coloriser: function(couleur)
        {
            this.each((i, e) => {$(e).css('background', couleur);})
        }
    }
)


$('article').coloriser('yellow');
$('article label').coloriser('pink');

*/


// essai avec chainage de fonction : il faut ajouter un retour pour que cela fonctionne,
// sinon, undefined est retourné et les fonctions suivants ne marchent pas

$.fn.extend (
    {
        coloriser: function(couleur)
        {
            return this.each((i, e) => {$(e).css('background', couleur);});
        }
    }
);

