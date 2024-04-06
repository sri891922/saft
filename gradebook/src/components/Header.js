import React from 'react';
const Header = ({ display, onShowStatistics }) => (
    <header>
      <h1>SafterTek FrontEnd</h1>
      <center><p>Date: 04/06/2024</p>
      <p>Professor: M Jogendra Kumar</p>
      <p>College: K L University</p>
      <p>Department: Computer Science</p>
      <p>Semester:  Even Sem 2024</p>
      <p>Group: FrontEnd</p>
      <button  onClick={onShowStatistics}>Show statistics</button></center>
    </header>
  );
  export default Header;