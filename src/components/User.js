const User = (props) =>{

  const {name, location} = props;
    return(
           <div className="user-card">
             <h2>Name: {name}</h2>
             <h3>Location:{location}</h3>
             <h4>Contact: @YokeshHashedIn</h4>
           </div>
    );
};

export default User;

//Or
//✅ Props Destructuring
// const User = ({ name }) => {
//   return (
//     <div className="user-card">
//       <h2>Name: {name}</h2>
//       <h3>Location: Dehradun</h3>
//       <h4>Contact: @akshaymarch7</h4>
//     </div>
//   );
// };

// export default User;