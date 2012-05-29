class PipelinesController < ApplicationController
  respond_to :json

  def index
    respond_with Pipeline.all
  end
end
