class ProjectsController < ApplicationController
  respond_to :json, :html

  def index
    respond_to do |format|
      format.html
      format.json { respond_with Project.all }
    end
  end

  def show
    respond_with Project.find_by_id!(params[:id])
  end

  def create
    respond_with Project.create(params[:project])
  end

  def destroy
    respond_with Project.destroy(params[:id])
  end

end
