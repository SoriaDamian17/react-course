import React from 'react';
import ReactDOM from 'react-dom';
import Segment from './Segment';
// import faker from 'faker';
// import ApprovalCard from './ApprovalCard';
// import CommentDetail from './CommentDetail';

// const App = () => {
//     return (
//         <div className="ui comments">
//             <ApprovalCard>
//                 <CommentDetail avatar={faker.image.avatar()}
//                 author={faker.name.firstName('m')} date="Tuesday 13 Oct" />
//             </ApprovalCard> 
//         </div>
//     );
// }

const App = () => {
    return (
      <div>
        <Segment>
            <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer.
            </div>
            <div className="ui primary button">Add Document</div>
        </Segment>
        <Segment>
          <h4 className="ui header">For Your Information</h4>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
        </Segment>
      </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
