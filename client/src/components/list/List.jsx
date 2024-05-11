import './List.scss';
import Card from "../card/Card";
import { listData } from "../../lib/dummydata";
import { Await } from 'react-router-dom';

function List({ posts }) {
  return (
    <div className='list'>
      <Await
        resolve={posts.postResponse}
        errorElement={<p>Error loading posts!</p>}
      >

        {(postResponse) =>
          postResponse.data.map((post) => (
            <Card key={post.id} item={post} />
          ))
        }
      </Await>
    </div>
  )
}

export default List;