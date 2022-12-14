class Api::NotesController < ApplicationController
  before_action :set_plant
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    render json: @plant.notes
  end

  def show
    render json: @note
  end

  def create
    @note = @plant.notes.new(notes_params)
    if @note.save
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(notes_params)
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: 'note deleted' }
  end

  private
    def notes_params
      params.require(:note).permit(:subject, :body)
    end

    def set_plant
      @plant = Plant.find(params[:plant_id])
    end

    def set_note
      @note = @plant.notes.find(params[:id])
    end
end
