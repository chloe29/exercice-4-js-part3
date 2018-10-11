/* on déclare la fonction dont l'évènement appelle onclick que l'on a nommé verif
on nomme 2 variables password et confirmPassword que l'on modifie avec le document html avec la méthode getElementById en récupérant l'id, on lui applique une valeur
on ajoute une condition if (si) le password est différent de confirmPassword, on applique des bordures rouges avec le style border
else (sinon) on applique des bordures vertes
*/
function verif(){
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
    if((password) != (confirmPassword)){
      document.getElementById('password').style.border='solid 2px red';
      document.getElementById('confirmPassword').style.border='solid 2px red';
    }else if((document.getElementById('password').value == false) || (document.getElementById('confirmPassword').value == false)){
      alert('Les champs sont vides !');
    }else{
      document.getElementById('password').style.border='solid 2px green';
      document.getElementById('confirmPassword').style.border='solid 2px green';
    }
}
