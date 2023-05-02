//add function here
function formatName(user){
  return user.firstName + '' + user.lastName + '. ' + user.address;
}  

const user = {
  firstName: 'West',
  lastName: 'Cliff',
  address: '4310 Alder Dr.'
};

  const element = <h1>Hello, {formatName(user)}!</h1>;
  
  ReactDOM.render(element, document.getElementById('root'));