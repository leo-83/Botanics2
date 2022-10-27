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
  if @propogation.save
    render json: @propogation
  else
    render json: { errors: @propogation.errors }, status: :unprocessable_entity
  end
end

def update
  if @propogation.update(propogation_params)
    render json: @propogation
  else
    render json: { errors: @propogation.errors }, status: :unprocessable_entity
  end
end

def destroy
  @propogation.destroy
  render json: { message: 'propogation deleted' }
end

private 
    def propogation_params
      params.require(:propogation).permit(:user_id, :name, :pdate, :method, :results)
    end

    def set_plant
      @plant = Plant.find(params[:plant_id])
    end

    def set_propogation
      @propogation = @plant.propogations.find(params[:id])
    end

end

