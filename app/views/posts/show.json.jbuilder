json.date @post.date
json.body @post.body
json.public_view @post.public_view
json.user_id @post.user_id
json.address @post.address
json.latitude @post.latitude
json.longitude @post.longitude
json.image_url url_for(@post.image)