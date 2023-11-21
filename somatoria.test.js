const somatoria = require('./somatoria');

test('soma de 1, 2, 3 tem que se igual a 6', () => {
    const mockPrompt = jest.fn();
    mockPrompt.mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValueOnce(3).mockReturnValueOnce(0).mockReturnValueOnce(0);
  
    global.prompt = mockPrompt;
  
    expect(somatoria()).toBe(6);
})

test('soma de 10 e 20', () => {
    const mockPrompt = jest.fn();
    mockPrompt.mockReturnValueOnce(10).mockReturnValueOnce(20).mockReturnValueOnce(0).mockReturnValueOnce(0).mockReturnValueOnce(0);
  
    global.prompt = mockPrompt;
  
    expect(somatoria()).toBe(30);
})

