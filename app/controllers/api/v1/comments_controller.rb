module Api
  module V1
    class CommentsController < ApplicationController
      def index
        @comments = Comment.includes(:comments).post_comments.where(commentable_id: params[:post_id])
      end

      def create
        comment = commentable.comments.new(comment_params)
        comment.author = current_user.email
        comment.save

        render json: comment
      end

      def destroy
        Comment.destroy(params[:id])
      end

      private

      def comment_params
        params.require(:comment).permit(:text, :post_id)
      end

      def commentable
        @commentable ||= if params[:comment_id]
          Comment.find_by_id(params[:comment_id])
        elsif params[:post_id]
          Post.find_by_id(params[:post_id])
        end
      end
    end
  end
end
