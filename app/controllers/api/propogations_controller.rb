class Api::PropogationsController < ApplicationController
  before_action :set_plant
  before_action :set_propogation, only: [:show, :update, :destroy]

def index
  render json: @plant.propogations
end

def show
  render json: @propogation
end

def create
  @propogation = @plant.propogations.new(propogation_params)
  if @note.save
    render json: @note
  else
    render json: { errors: @note.errors }, 
    status: :unprocessable_entity
  end
end

def update
  if @note.update(note_params)
    render json: @note
  else
    render json: { errors: @note.errors }, 
    status: :unprocessable_entity
  end
end

def destroy
  @note.destroy
  render json: { message: 'note deleted' }
end

private
  def propogations_params
    params.require(:propogation).permit(:body, :plant_id)
  end

  def set_plant
    @plant = Plant.find(params[:plant_id])
  end

end

