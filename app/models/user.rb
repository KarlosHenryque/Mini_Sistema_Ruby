class User < ApplicationRecord
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :senha, presence: true
  validates :conf_senha, presence: true

  validate :confirmar_senha

  def confirmar_senha
    if senha != conf_senha
    errors.add(:base, "Senhas não confere")
    end
  end
end
