import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(
      'table',
      null,
      React.createElement(
         'tr',
         null,
      React.createElement(
          'th',
          null,
          'First Name', " ", 'Last Name',
      React.createElement(
          'td',
           null, 
           'Janet', " ", 'James',
      React.createElement(
          'td',
           null,
            'John', " ", 'Jameson',
              )
          )
      )
  )
),
  document.getElementById('root')
);





// ReactDOM.render(
//     React.createElement(
//       'table',
//       null,
//       React.createElement(
//         'tr',
//         null,
//         React.createElement(
//           'th',
//           null,
//           'First Name', " ", 'Last Name',
//           React.createElement('td', null, 'Janet', " " , 'James')
//         )
//       ),
//       React.createElement(
//         'table',
//         null,
//         React.createElement(
//           'tr',
//           null,
//           React.createElement(
//               'th',
//               null,
//               'Last Name',
//           React.createElement('td', null, 'John', " " , 'Jameson')
//           )
//         )
//       )
//     ),
//     document.getElementById('root')
//   );

// ReactDOM.render(
//     React.createElement(
//         'li',
//         null,
//         'Item 1',
//         React.createElement(
//           'ul',
//           null,
//           React.createElement('li', null, 'Price 1')
//         )
//       ),
//       React.createElement(
//         'li',
//         null,
//         'Item 2',
//         React.createElement(
//           'ul',
//           null,
//           React.createElement('li', null, 'Price 2')

//             )
//         )
//     ),
//     document.getElementById('root')
// )
