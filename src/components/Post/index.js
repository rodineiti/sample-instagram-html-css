import React from "react";

export default function Post({ post = {}, handleClickLike }) {
  const { id, user, user_thumb, image, likes_count, like_show, liked } = post;
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header--profile">
          <img src={user_thumb} alt="" />
          <span>{user}</span>
        </div>
        <div className="card__header--options">
          <button>
            <i className="fa fa-ellipsis-h" />
          </button>
        </div>
      </div>
      <div className="card__body">
        <img src={image} alt={user} />
        <div className="card__header--settings">
          <div className="card__header--group">
            <button onClick={() => handleClickLike(id)}>
              <i className={`${liked ? "far" : "fas"} fa-heart`} />
            </button>
            <button>
              <i className="far fa-comment" />
            </button>
          </div>
          <button>
            <i className="far fa-bookmark" />
          </button>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer--likes">
          <img src={like_show.thumb} alt={like_show.name} />
          <span>
            curtido por <strong>{like_show.name}</strong> e outras
            <strong> {likes_count} pessoas</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
