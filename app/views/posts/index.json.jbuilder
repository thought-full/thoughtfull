json.array! @posts do |post|
    json.id post.id
    json.date post.date
    json.body post.body
    json.public_view post.public_view
    json.user_id post.user_id
    json.address post.address
    json.latitude post.latitude
    json.longitude post.longitude
    if post.image.attachment
        json.image_url url_for(post.image)
    end
end