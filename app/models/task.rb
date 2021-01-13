class Task < ApplicationRecord
  has_one_attached :avatar

  def complete!
    if !self.completed
      self.completed = true
      self.completed_at = Time.now
      self.save!
    end

    self
  end
end
