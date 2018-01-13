package selenium.tests;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.ChromeDriverManager;

public class WebTest
{
	private static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws Exception 
	{
		//driver = new HtmlUnitDriver();
		ChromeDriverManager.getInstance().setup();
		driver = new ChromeDriver();
	}
	
	@AfterClass
	public static void  tearDown() throws Exception
	{
		driver.close();
		driver.quit();
	}

	
	@Test
	public void Verfiy55() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
	    WebDriverWait wait = new WebDriverWait(driver, 30);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='dynamicStudies']//span[.='Frustration of Software Developers']/../../..//div[@class='span4']//p//span[@class='backers']")));
        WebElement element = driver.findElement(By.xpath("//*[@id='dynamicStudies']//span[.='Frustration of Software Developers']/../../..//div[@class='span4']//p//span[@class='backers']"));
	    String x = element.getText();
	    System.out.println(x);
	    assertEquals("55", x);  
	    
	}
	
	@Test
	public void studiesClosed() throws Exception
    {
        driver.get("http://www.checkbox.io/studies.html");
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='status']/span[.='CLOSED']")));
        List<WebElement> elementlist = driver.findElements(By.xpath("//a[@class='status']/span[.='CLOSED']"));
        assertNotNull(elementlist);
        assertEquals(5, elementlist.size());
    }
	
	@Test
	public void enableParticipate() throws Exception
    {
		boolean participate = false;
        driver.get("http://www.checkbox.io/studies.html");
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='status']/span[.='OPEN']/../following-sibling::div/button")));
        List<WebElement> elementlist = driver.findElements(By.xpath("//a[@class='status']/span[.='OPEN']/../following-sibling::div/button"));
        for(int i=0;i<elementlist.size();i++){
        	if(elementlist.get(i).isEnabled()){
        		participate=true;
        	}
        	assertNotNull(elementlist.get(i));
            assertEquals(true, participate);
        }
        
    }
	
	@Test
	public void checkImage() throws Exception
    {
		String image = "http://www.checkbox.io/media/amazongc-micro.jpg";
        driver.get("http://www.checkbox.io/studies.html");
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h3/span[.='Software Changes Survey']/../following-sibling::div/div/span/img")));
        WebElement amazonImage = driver.findElement(By.xpath("//h3/span[.='Software Changes Survey']/../following-sibling::div/div/span/img"));
        
        	assertNotNull(amazonImage);
            assertEquals(image, amazonImage.getAttribute("src"));
        
    }

}
