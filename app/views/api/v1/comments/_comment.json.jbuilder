json.extract! comment, :id, :author, :text

json.comments comment.comments do |comment|
  json.partial! "api/v1/comments/comment", comment: comment
end 
