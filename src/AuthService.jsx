// import React, { useState, createContext, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);


// const fakeAuthentication = async (formData, success = true) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         const userData = {
//           id: 1,
//           username: formData.username,
//         };
//         resolve(userData);
//       } else {
//         reject(new Error('Вхід не відбувся :('));
//       }
//     }, 1000);
//   });
// };

// const fakeRegistration = async (formData, success = true) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         const userData = {
//           id: 2,
//           username: formData.username,
//         };
//         resolve(userData);
//       } else {
//         reject(new Error('Реєстрація не відбулася :('));
//       }
//     }, 1000);
//   });
// };



//   const login = async (formData) => {
//     try {
//       const userData = await fakeAuthentication(formData);
//       setUser(userData);
//       return userData;
//     } catch (error) {
//       console.error('Вхід не відбувся :(', error.message);
//       throw new Error('Вхід не відбувся :(');
//     }
//   };

//   const register = async (formData) => {
//     try {
//       const userData = await fakeRegistration(formData);
//       setUser(userData);
//       return userData;
//     } catch (error) {
//       console.error('Реєстрація не відбулася :( ', error.message);
//       throw new Error('Реєстрація не відбулася :( ');
//     }
//   };

//   const logout = () => {
//     setUser(null);
//   };
//   const contextValue = {
//     user,
//     login,
//     register,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => {
//     const context = useContext(AuthContext);
  
//     if (!context) {
//       throw new Error('useAuthContext must be used within an AuthProvider');
//     }
  
//     return context;
//   };

//   export const useAuth = () => {
//     const { login, register, logout, user } = useAuthContext();
  
//     return {
//       login,
//       register,
//       logout,
//       user,
//     };
//   };