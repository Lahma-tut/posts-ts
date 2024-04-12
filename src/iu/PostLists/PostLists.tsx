import './../../index.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import React from 'react'
import { IPost, ItemProps } from '../../types/posts.props'


export const PostLists: React.FC<ItemProps> = ({ data }) => {
	const navigate = useNavigate()

	console.log(data)

	return (
		<>
			{
				data.map((post: IPost) => (
					<article key={post.id} className="article">
						<div className="posts-title">
							<h3>{post.title}</h3>
						</div>
						<div className="posts-list">
							{
								post.body.length > 0 ? post.body.substring(0, 120) + " ..." : post.body
							}
						</div>
						<div className="posts-button">
							<Button
								onClick={() => { navigate(`/post/${post.id}`) }}>
								подробнее #{post.id}
							</Button>
						</div>
					</article>
				))
			}
		</>
	)
}