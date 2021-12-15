class ConstellationsController < ApplicationController
  before_action :set_constellation, only: [:show, :update, :destroy]

  def index
    @constellations = Constellation.all

    render json: @constellations, include: :tasks
  end

  def show
    render json: @constellation, include: :tasks
  end

  def create
    @constellation = Constellation.new(constellation_params)
    if @constellation.save
      render json: @constellation, status: :created
    else
      render json: @constellation.errors, status: :unprocessable_entity
    end
  end

  def update
    if @constellation.update(constellation_params)
      render json: @constellation
    else
      render json: @constellation.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @constellation.destroy
  end
  private

  def set_constellation
    @constellation = Constellation.find(params[:id])
  end
  def constellation_params
    params.require(:constellation).permit(:name)
  end
end
