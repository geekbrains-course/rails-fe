class ColorsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    logger.debug "got color #{params[:color]}"
  end
end
